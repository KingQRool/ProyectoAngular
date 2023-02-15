import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerList = ['Inicio','Clientes','Prestamos','Productos']
}

// {
// id: 1,
// name: 'Inicio',
// },
// {
// id: 1,
// name: 'Clientes',
// },
// {
// id: 1,
// name: 'Prestamos',
// }
