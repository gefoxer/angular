import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FavoritesService } from '../../services/favorites.service';
import { Card } from '../../interfaces/interface';
import { ForevercardComponent } from '../../components/forevercard/forevercard.component';

@Component({
  selector: 'app-forever',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ForevercardComponent],
  templateUrl: './forever.component.html',
  styleUrls: ['./forever.component.scss']
})
export class ForeverComponent implements OnInit {
  favoriteItems: Card[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(items => {
      this.favoriteItems = items;
    });
  }

  removeFromFavorites(itemId: number) {
    this.favoritesService.removeFromFavorites(itemId);
  }
}
