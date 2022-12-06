import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { AddUserComponent } from './Components/User/add-user/add-user.component';
//import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductComponent } from './Components/User/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import {LoginComponent} from './Components/login/login.component';
import { EditUserComponent } from './Components/User/edit-user/edit-user.component';
import { EditProductComponent } from './Components/User/product/edit-product/edit-product.component';
import { AddProductComponent } from './Components/User/product/add-product/add-product.component';
import { CustomInterceptor } from './services/custom.interceptor';
//import { LoginComponent } from './Components/components/login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { NavbarComponent } from './Components/navbar/navbar.component';

export function tokenGetter() { 
  return localStorage.getItem("access_token"); 
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    //ProductComponentComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    EditUserComponent,
    EditProductComponent,
    AddProductComponent,
    NavbarComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7138"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
