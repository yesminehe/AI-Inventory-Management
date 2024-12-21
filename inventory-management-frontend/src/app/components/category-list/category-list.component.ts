// category-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule], // Ensure to import CommonModule if using standalone component
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: any[] = []; // Array to hold the categories
  errorMessage: string = ''; // Error message

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching categories';
      }
    );
  }
}
