import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NaComponent } from './na/na.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {
    path: "",
    component: AllProductsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "**",
    component: NaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
