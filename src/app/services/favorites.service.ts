import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Card[] = [];
  private favoritesSubject = new BehaviorSubject<Card[]>([]);

  constructor() {
    // Load favorites from localStorage on service initialization
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
      this.favoritesSubject.next(this.favorites);
    }
  }

  getFavorites() {
    return this.favoritesSubject.asObservable();
  }

  addToFavorites(item: Card) {
    if (!this.favorites.find(f => f.id === item.id)) {
      this.favorites.push(item);
      this.updateFavorites();
    }
  }

  removeFromFavorites(itemId: number) {
    this.favorites = this.favorites.filter(item => item.id !== itemId);
    this.updateFavorites();
  }

  isFavorite(itemId: number): boolean {
    return this.favorites.some(item => item.id === itemId);
  }

  private updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.favoritesSubject.next(this.favorites);
  }
} 