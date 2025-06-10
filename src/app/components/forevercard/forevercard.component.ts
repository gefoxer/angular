import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../interfaces/interface';
import { CardService } from '../../services/card.service';
import { BuutonblackComponent } from "../buutonblack/buutonblack.component";

@Component({
  selector: 'app-forevercard',
  standalone: true,
  imports: [CommonModule, BuutonblackComponent],
  templateUrl: './forevercard.component.html',
  styleUrls: ['./forevercard.component.scss']
})
export class ForevercardComponent implements OnInit {
  favoriteCards: Card[] = [];
  baseUrl = 'http://localhost:1452';

  constructor(private cardService: CardService) {}

  ngOnInit() {
    // Подписываемся на изменения избранных карточек
    this.cardService.getFavoriteCards().subscribe(cards => {
      this.favoriteCards = cards;
    });
  }

  getProductImage(product: Card): string {
    if (!product.images || product.images.length === 0) return '';
    if (product.images[0].startsWith('http')) {
      return product.images[0];
    }
    return `${this.baseUrl}/${product.images[0]}`.replace(/([^:]\/)\/+/g, '$1');
  }

  removeFromFavorites(cardId: number) {
    this.cardService.removeFromFavorites(cardId);
  }
}
