import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ButtoninvertComponent } from "../buttoninvert/buttoninvert.component";

@Component({
  selector: 'app-popularproduct',
  imports: [ButtonComponent, ButtoninvertComponent],
  templateUrl: './popularproduct.component.html',
  styleUrl: './popularproduct.component.scss'
})
export class PopularproductComponent {

}
