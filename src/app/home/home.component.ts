import { Component, OnInit, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  showBackToTop = false;

  constructor() {}

  ngOnInit() {
    this.checkScroll();
    this.initScrollAnimation();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
    this.handleScrollAnimation();
  }

  private checkScroll() {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  private handleScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }

  private initScrollAnimation() {
    setTimeout(() => {
      this.handleScrollAnimation();
    }, 100);
  }

  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMenuOpen = false;
  }
}
