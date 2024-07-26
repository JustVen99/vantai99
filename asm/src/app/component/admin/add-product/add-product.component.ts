import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DuLieuService } from '../../../service/du-lieu.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private d:DuLieuService) {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image:['',Validators.required],
      price: ['', Validators.required],
      cat_id:['',Validators.required]

    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.d.addProduct(this.productForm.value)
        .subscribe(
          response => {
            console.log('Category added successfully', response);
            // Reset the form
            this.productForm.reset();
          },
          error => {
            console.error('Error adding category:', error);
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
}
