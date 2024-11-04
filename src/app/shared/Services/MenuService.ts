import { MenuItem } from './../Models/MenuItem';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { StorageService } from './storage.service'; // If you need storage services for any reason

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly endpoint = 'api/menu'; // Set your API endpoint for the menu
  private menuItemsSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  public menuItems$: Observable<MenuItem[]> = this.menuItemsSubject.asObservable();

  constructor(private api: ApiService, private storageService: StorageService) {}

  // Fetch menu items from the API
  getMenuItems(): Observable<MenuItem[]> {
    return this.api.get<MenuItem[]>(this.endpoint).pipe(
      tap(menuItems => this.menuItemsSubject.next(menuItems)) // Update the BehaviorSubject with fetched items
    );
  }

  // Get menu items from the BehaviorSubject
  getCurrentMenuItems(): MenuItem[] {
    return this.menuItemsSubject.value;
  }

  // Optional: You can add methods to update or manipulate the menu items
  addMenuItem(menuItem: MenuItem): void {
    const currentMenuItems = this.getCurrentMenuItems();
    this.menuItemsSubject.next([...currentMenuItems, menuItem]); // Update the BehaviorSubject
    // Optionally call an API to save the new menu item
  }

  // Other methods like updateMenuItem, deleteMenuItem can be added as needed
}
