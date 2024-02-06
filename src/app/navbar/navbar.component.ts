import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMinimized: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    if (pageYOffset > 40) {
      this.isMinimized = true;
    } else {
      this.isMinimized = false;
    }
  }
}
