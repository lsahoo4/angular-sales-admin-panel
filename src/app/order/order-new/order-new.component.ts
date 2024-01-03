import { Component, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormControl, FormsModule, FormArray, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    RouterLink
  ]
})
export class OrderNewComponent implements OnInit {

  private fb = inject(FormBuilder);

  orderForm: FormGroup | any;
  quantity: number = 1;
  filteredProducts: any[] = [];
  productControl = new FormControl();
  paymentMethods: string[] = ['Credit Card', 'PayPal', 'Cash on Delivery'];
  users: string[] = ['user1', 'user2', 'user3'];
  selectedPaymentMethod: string = '';
  selectedProduct: any;
  orderTotal: number = 0;

  products: any[] = [
    { id: 1, name: 'Product A', price: 230 },
    { id: 2, name: 'Product B' , price: 500},
    { id: 3, name: 'Product C', price: 1000 }
  ];

  constructor() { }

  ngOnInit() {
    // Initialize the form
    this.orderForm = this.fb.group({
      products: this.fb.array([]),
      paymentMethod: ['', Validators.required],
      orderBy: [''],
      shipping: ['free', Validators.required]
    });

    // Add a default product to the form array
    this.addProduct();
  }

  get productForms() {
    return this.orderForm?.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  addProduct() {
    this.productForms.push(this.createProduct());
  }

  removeProduct(index: number) {
    this.productForms.removeAt(index);
  }

  onSubmit(): void {
     // Add your logic for handling the submitted order here
     console.log('Order Submitted:', this.orderForm.value);
  }
}
