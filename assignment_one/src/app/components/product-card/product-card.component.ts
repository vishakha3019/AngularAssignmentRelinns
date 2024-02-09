import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() card: any = {
    title : '',
    description : '',
    price: 0,
    ratings: 0,
  };

  addToCart() {
    // document.write('Added to Cart:', this.card.title);
    alert('Added to Cart:'+this.card.title);
  }

}
