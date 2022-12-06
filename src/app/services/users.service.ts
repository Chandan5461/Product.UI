import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + 'Users/');

  
 }
 addUser(addUserRequest: User): Observable<User> {
  return this.http.post<User>(this.baseApiUrl + 'Users/', addUserRequest);
 }
 getUser(id: string): Observable<User>{
  return this.http.get<User>(this.baseApiUrl + 'Users/' + id);
 }
 updateUser(id: number, updateUserRequest: User): Observable<User>{
  return this.http.put<User>(this.baseApiUrl + 'Users/' + id, updateUserRequest)
 }
 deleteUser(id: number):Observable<User> {
  return this.http.delete<User>(this.baseApiUrl + 'Users/' + id);
 }

 getAllProduct(): Observable<Product[]> {
   
  return this.http.get<Product[]>(this.baseApiUrl + 'Products')

 }
 addProduct(addProductRequest: Product) :Observable<Product> {
  
  return this.http.post<Product>(this.baseApiUrl + 'Products/', addProductRequest);
 }
 getProduct(id: string): Observable<Product>{
  return this.http.get<Product>(this.baseApiUrl + 'Products/' + id);
 }

 updateProduct(id: number, updateProductRequest: Product): Observable<Product>{
  return this.http.put<Product>(this.baseApiUrl + 'Products/' + id, updateProductRequest);
 }
 deleteProduct(id: number): Observable<Product> {
  return this.http.delete<Product>(this.baseApiUrl + 'Products/' + id);
 }
 
 
  onlogin(Object: any) : Observable<any>{
    return this.http.post('https://localhost:7138/api/Auth',Object);
  }
  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseApiUrl+ 'api/Auth', {
      Username:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text',
    });
  
   }
   isLoggedin(): boolean {
    return localStorage.getItem("access_token") ? true : false;
   }
   setToken(token:string){
    localStorage.setItem("access_token", token);

  }  
   removeToken() {
    localStorage.removeItem("access_token");
  } 

}