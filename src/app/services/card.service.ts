import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private favoriteCards = new BehaviorSubject<Card[]>([]);

  constructor() {
    // Загружаем сохраненные карточки при инициализации
    const savedCards = localStorage.getItem('favoriteCards');
    if (savedCards) {
      this.favoriteCards.next(JSON.parse(savedCards));
    }
  }

  getFavoriteCards() {
    return this.favoriteCards.asObservable();
  }

  addToFavorites(card: Card) {
    const currentCards = this.favoriteCards.value;
    if (!currentCards.find(c => c.id === card.id)) {
      const updatedCards = [...currentCards, card];
      this.favoriteCards.next(updatedCards);
      localStorage.setItem('favoriteCards', JSON.stringify(updatedCards));
    }
  }

  removeFromFavorites(cardId: number) {
    const currentCards = this.favoriteCards.value;
    const updatedCards = currentCards.filter(card => card.id !== cardId);
    this.favoriteCards.next(updatedCards);
    localStorage.setItem('favoriteCards', JSON.stringify(updatedCards));
  }

  isCardFavorite(cardId: number): boolean {
    return this.favoriteCards.value.some(card => card.id === cardId);
  }
} 