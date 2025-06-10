import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, Cardsale } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { BuutonblackComponent } from "../buutonblack/buutonblack.component";

@Component({
  selector: 'app-cardsale',
  standalone: true,
  imports: [CommonModule, BuutonblackComponent],
  templateUrl: './cardsale.component.html',
  styleUrls: ['./cardsale.component.scss']
})
export class CardsaleComponent implements OnInit {
  cards: Cardsale[] = [];
  baseUrl = 'http://localhost:1452';
  displayedCards: Cardsale[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  getProductImage(product: Cardsale): string {
    if (!product.images || product.images.length === 0) return '';
    if (product.images[0].startsWith('http')) {
      return product.images[0];
    }
    return `${this.baseUrl}/${product.images[0]}`.replace(/([^:]\/)\/+/g, '$1');
  }

  fetchProducts(): void {
    this.http.get<Cardsale[]>('http://localhost:1452/api/products/').subscribe({
      next: (data) => {
        this.cards = data;
        const discountedProducts = data.filter(product => product.discount_price !== null);
        this.displayedCards = discountedProducts.slice(0, 4);
      },
      error: (err) => {
        console.error('Ошибка при загрузке данных:', err);
      }
    });
  }
}