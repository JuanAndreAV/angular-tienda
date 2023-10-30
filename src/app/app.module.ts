import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { TopBarComponent } from 'src/app/top-bar/top-bar.component';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { ProductAlertsComponent } from 'src/app/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ShippingComponent } from 'src/app/shipping/shipping.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/