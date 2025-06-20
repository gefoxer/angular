import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from '../../components/card/card.component';
import { FirstComponent } from "../../components/first/first.component";
import { BannersComponent } from "../../components/banners/banners.component";
import { CardsaleComponent } from '../../components/cardsale/cardsale.component';
import { SummersaleComponent } from "../../components/summersale/summersale.component";
import { PopularproductComponent } from '../../components/popularproduct/popularproduct.component';



@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CardComponent, FirstComponent, BannersComponent, CardsaleComponent, SummersaleComponent, PopularproductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
  
})

export class HomeComponent {

}


