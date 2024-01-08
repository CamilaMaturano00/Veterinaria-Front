import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  products: any[] = [
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
    { code: 2615, name: 'prueba', category: 'prueba', quantity: 1 },
  ];
  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 },
  ];
  rows2: number = 10;
  first2: number = 0;
  items: any[] = [
    {
      label: 'Editar',
      icon: 'pi pi-user-edit',
      routerLink: '/edit/2',
    },
  ];

  constructor() {}

  ngOnInit() {}
  onPageChange2(event: any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }
}
