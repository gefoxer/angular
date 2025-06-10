import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Popularproduct {
  image: string;
  title: string;
  description: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-popularproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popularproduct.component.html',
  styleUrls: ['./popularproduct.component.scss']
})
export class PopularproductComponent {
  currentSlide = signal(0);
  
  products = signal<Popularproduct[]>([
    {
      image: '/img/wathhaitph.png',
      title: 'Ipad Pro',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#ffff'
    },
    {
      image: '/img/ipad.png',
      title: 'Popular Products',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#f9f9f9'
    },
    {
      image: '/img/samsung.png',
      title: 'Samsung Galaxy',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#eaeaea'
    },
    {
      image: '/img/macpro.png',
      title: 'Macbook Pro',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#2c2c2c'
    }
  ]);

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }

  nextSlide(): void {
    this.currentSlide.update(current => 
      current === this.products().length - 1 ? 0 : current + 1
    );
  }

  prevSlide(): void {
    this.currentSlide.update(current => 
      current === 0 ? this.products().length - 1 : current - 1
    );
  }
}