import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent {
  category = { Name: '', Description: '' };
  errorMessage = '';
  successMessage = '';

  constructor(private categoryService: CategoryService) {}

  addCategory() {
    console.log(this.category);
    if (!this.category.Name || !this.category.Description) {
      this.errorMessage = 'Both fields are required.';
      this.successMessage = '';
      return;
    }

    this.categoryService.addCategory(this.category).subscribe({
      next: () => {
        this.successMessage = 'Category added successfully!';
        this.errorMessage = '';
        this.category = { Name: '', Description: '' }; // Reset the form
      },
      error: (err) => {
        this.errorMessage = `Error: ${err.error || 'Something went wrong.'}`;
        this.successMessage = '';
      },
    });
  }
}
