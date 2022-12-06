import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AddUserComponent } from './Components/User/add-user/add-user.component';
import { EditUserComponent } from './Components/User/edit-user/edit-user.component';
import { AddProductComponent } from './Components/User/product/add-product/add-product.component';
import { EditProductComponent } from './Components/User/product/edit-product/edit-product.component';
import { ProductComponent } from './Components/User/product/product.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  {
  path:'login',
  component: LoginComponent
 }, 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'UserList',
    component: UserListComponent
  },
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/add',
    component: AddUserComponent
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
   {
    path: 'product/edit/:id',
    component: EditProductComponent
  }, 
  {
    path: 'about',
    component: AboutComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
