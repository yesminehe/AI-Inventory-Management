import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import the necessary modules
import { bootstrapApplication } from '@angular/platform-browser';
import { InventoryListComponent } from './app/components/inventory-list/inventory-list.component'; // Import your component
import { withFetch } from '@angular/common/http'; // Import withFetch

bootstrapApplication(InventoryListComponent, {
  providers: [
    provideHttpClient(withFetch()), // Enable fetch API for better performance
  ],
}).catch((err) => console.error(err));
