import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DuLieuService } from '../../../service/du-lieu.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-cate',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './add-cate.component.html',
  styleUrl: './add-cate.component.css'
})
export class AddCateComponent {
  categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private d:DuLieuService, private route: Router) {
    this.categoryForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.d.addCate(this.categoryForm.value)
        .subscribe(
          response => {
            console.log('Category added successfully', response);
            // Reset the form
            this.route.navigate(['/admin/loai'])
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
