import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('menus') menus: ElementRef;
  isMobileScreenMode = false;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobileScreenMode = window.innerWidth < 768;
  }
  ngOnInit(): void {
    this.isMobileScreenMode = window.innerWidth < 768;
  }

  toggleMenu() {
    this.menus.nativeElement.style.display = 
    this.menus.nativeElement.style.display === 'none' ? 'block' : 'none';
  }
}
