import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public showForm : boolean = false;
  openForm(){
    this.showForm = !this.showForm
  }
}
