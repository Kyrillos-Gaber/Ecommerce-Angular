import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NaComponent } from './na/na.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartTableRowComponent } from './cart-table-row/cart-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NaComponent,
    ProductCardComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    AllProductsComponent,
    CartComponent,
    CartTableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
