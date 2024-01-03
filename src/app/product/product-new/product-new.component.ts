import { Component, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    RouterLink,
    MatIconModule,
    RouterModule
  ]
})
export class ProductNewComponent implements OnInit {

  private fb = inject(FormBuilder);
  productForm = this.fb.group({
    company: null,
    price: [null, Validators.required],
    productName: [null, Validators.required],
    description: [null, Validators.required]
  });

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    console.log(this.productForm.value);
    alert('Thanks!');
  }
}
