import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  constructor(private cartService: CartService){}
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
