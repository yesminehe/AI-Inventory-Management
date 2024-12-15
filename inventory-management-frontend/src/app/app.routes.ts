import { Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';

export const routes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'inventory', component: InventoryListComponent },
];
