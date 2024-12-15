import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  imports: [CommonModule], // Ensure CommonModule is imported
})
export class InventoryListComponent {
  inventoryItems: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5147/api/Inventory').subscribe(
      (data) => {
        this.inventoryItems = data;
      },
      (error) => {
        console.error('Error loading inventory items', error);
        this.errorMessage = 'Failed to load inventory items.';
      }
    );
  }

  deleteItem(id: number) {
    console.log(`Deleting item with id: ${id}`);
    this.http.delete(`http://localhost:5147/api/Inventory/${id}`).subscribe(
      () => {
        // Remove the item from the list after deletion
        this.inventoryItems = this.inventoryItems.filter(
          (item) => item.id !== id
        );
      },
      (error) => {
        console.error('Error deleting item', error);
        this.errorMessage = 'Failed to delete item.';
      }
    );
  }
}
