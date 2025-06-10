import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { BuutonblackComponent } from "../buutonblack/buutonblack.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, BuutonblackComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: Card[] = [];
  baseUrl = 'http://localhost:1452';
  displayedCards: Card[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  getProductImage(product: Card): string {
    if (!product.images || product.images.length === 0) return '';
    if (product.images[0].startsWith('http')) {
      return product.images[0];
    }
    return `${this.baseUrl}/${product.images[0]}`.replace(/([^:]\/)\/+/g, '$1');
  }

  fetchProducts(): void {
    this.http.get<Card[]>('http://localhost:1452/api/products/').subscribe({
      next: (data) => {
        this.cards = data;
        this.displayedCards = data.slice(0, 8);
      },
      error: (err) => {
        console.error('Ошибка при загрузке данных:', err);
      }
    });
  }
}