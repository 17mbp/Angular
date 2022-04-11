import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError as observableError } from 'rxjs';
import { Role } from './role.enum';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends CacheService {
  private readonly authProvider: (email: string, password: string) => Observable<IServeAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(this.getItem('authStatus') || defaultAuthStatus);

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe(authStatus => {
      this.setItem('authStatus', authStatus);
    });
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider(email: string, password: string): Observable<IServeAuthResponse> {
    return this.httpClient.post<IServeAuthResponse>(`${environment.urlService}/authenticate`, { email: email, password: password });
  }

  login(email: string, password: string): Observable<IAuthStatus> {
    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        this.setToken(value.access_Token);
        const result = decode(value.access_Token);
        return result as IAuthStatus;
      })
    );
    loginResponse.subscribe(
      res => {
        this.authStatus.next(res);
      },
      err => {
        this.logout();
        return observableError(err);
      }
    );
    return loginResponse;
  }

  logout() {
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }

  getToken(): string {
    return this.getItem('jwt') || '';
  }

  private clearToken() {
    this.removeItem('jwt');
  }

  getAuthStatus(): IAuthStatus {
    return this.getItem('authStatus');
  }
}
export interface IAuthStatus {
  access_Token: string;
  role: Role;
  //unique_name: string;
  //primarysid: number;
}

interface IServeAuthResponse {
  access_Token: string;
}

const defaultAuthStatus: IAuthStatus = { role: Role.None, access_Token: null };