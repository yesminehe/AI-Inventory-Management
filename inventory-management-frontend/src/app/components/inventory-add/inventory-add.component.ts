import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css'],
})
export class InventoryAddComponent {
  newItem = { name: '', description: '', price: 0, quantity: 0 };

  constructor(private inventoryService: InventoryService) {}

  addItem(): void {
    this.inventoryService.addItem(this.newItem).subscribe(
      (data) => {
        console.log('Item added successfully', data);
      },
      (error) => {
        console.error('Error adding item', error);
      }
    );
  }
}
