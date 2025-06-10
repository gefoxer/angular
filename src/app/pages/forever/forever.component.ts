import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-forever',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './forever.component.html',
  styleUrl: './forever.component.scss'
})
export class ForeverComponent {

}
