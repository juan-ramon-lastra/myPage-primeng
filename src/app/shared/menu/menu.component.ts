import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: ' Juan Ramón',
      icon: 'pi pi-prime',
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: 'Portfolio',
          icon: 'pi pi-folder',
          routerLink: 'portfolio'
        },
        {
          label: 'About me',
          icon: 'pi pi-user',
          routerLink: 'about'
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          routerLink: 'contact'
        }
      ]
    }]
  }

}
