import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    //{ path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Médecins',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Agences',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'Laveurs',  icon:'content_paste', class: '' },
    { path: '/maps', title: 'ADD USER',  icon:'bubble_chart', class: '' },
 //   {path : '/medecin-user' ,title: 'user',  icon:'bubble_chart', class: ''},
    {path : '/payment' ,title: '5alesna',  icon:'bubble_chart', class: ''},
    {path : '/fiche' ,title: 'la fiche de déces',  icon:'bubble_chart', class: ''},
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
