import { Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component'; // Import CategoryListComponent
import { CategoryAddComponent } from './components/category-add/category-add.component'; // Import CategoryAddComponent

export const routes: Routes = [
  { path: '', component: InventoryListComponent }, // Default route for Inventory List
  { path: 'categories', component: CategoryListComponent }, // Route for Category List
  { path: 'add-category', component: CategoryAddComponent }, // Route for Add Category
];
