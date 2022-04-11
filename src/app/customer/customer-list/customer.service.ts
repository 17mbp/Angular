import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  getCustomerList(page: number, row: number): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${environment.urlService}/customer/GetPaginatedCustomer/${page}/${row}`);
  }
}