import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; 
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthHttpInterceptors } from './auth/AuthHttpInterceptors';
import { MaterialModule } from './/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({},{}),
    EffectsModule.forRoot([]),
    SharedModule,   
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,    
    HttpClientModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard,
     {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptors,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }