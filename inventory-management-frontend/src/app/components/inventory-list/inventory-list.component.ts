import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {
  inventoryItems: any[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.inventoryService.getItems().subscribe(
      (data) => {
        this.inventoryItems = data;
      },
      (error) => {
        console.error('Error loading inventory items', error);
      }
    );
  }

  deleteItem(id: number): void {
    this.inventoryService.deleteItem(id).subscribe(
      () => {
        this.inventoryItems = this.inventoryItems.filter(
          (item) => item.id !== id
        );
      },
      (error) => {
        console.error('Error deleting item', error);
      }
    );
  }
}
