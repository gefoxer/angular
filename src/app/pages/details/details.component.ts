import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";
import { CardsaleComponent } from "../../components/cardsale/cardsale.component";


@Component({
  selector: 'app-details',
  imports: [HeaderComponent, FooterComponent, CardsaleComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
