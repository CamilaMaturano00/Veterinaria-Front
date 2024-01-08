import { Component, ElementRef, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MenuModule,
    BlockUIModule,
    ButtonModule,
    NgClass,
    ToolbarModule,
    InputTextModule,
    PanelMenuModule,
    SelectButtonModule,
    BreadcrumbModule,
  ],
  standalone: true,
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  configurationUser: any[];
  menus: any[];
  items: any[];
  isVisible = true;

  home: any;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Computer',
        command: () => {
          this.update();
        },
      },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.configurationUser = [
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Cambiar contraseña',
        icon: 'pi pi-lock',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          this.update();
        },
      },
    ];

    this.menus = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Consultas',
        icon: 'pi pi-folder',
      },
      {
        label: 'Agenda',
        icon: 'pi pi-calendar',
      },
    ];
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isVisible = !this.isVisible;
  }

  delete() {}

  update() {
    console.log('entra');
  }
  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
