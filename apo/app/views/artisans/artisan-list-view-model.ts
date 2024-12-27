import { Observable } from '@nativescript/core';
import { Artisan } from '../../models/artisan';

export class ArtisanListViewModel extends Observable {
  private _artisans: Artisan[] = [];
  private _selectedCategory: string = 'All';

  constructor() {
    super();
    this.loadArtisans();
  }

  get artisans(): Artisan[] {
    return this._artisans;
  }

  set artisans(value: Artisan[]) {
    if (this._artisans !== value) {
      this._artisans = value;
      this.notifyPropertyChange('artisans', value);
    }
  }

  filterByCategory(args: any) {
    const button = args.object;
    this._selectedCategory = button.text;
    
    if (this._selectedCategory === 'All') {
      this.loadArtisans();
    } else {
      this.artisans = this._artisans.filter(
        artisan => artisan.category === this._selectedCategory
      );
    }
  }

  onSearchTap() {
    // TODO: Implement search functionality
    console.log('Search tapped');
  }

  onArtisanTap(args: any) {
    const artisan = this.artisans[args.index];
    // TODO: Navigate to artisan details page
    console.log('Selected artisan:', artisan.name);
  }

  private loadArtisans() {
    // TODO: Replace with actual API call
    this.artisans = [
      new Artisan({
        id: '1',
        name: 'Ahmed Hassan',
        category: 'Carpenter',
        rating: 4.8,
        location: {
          latitude: 30.0444,
          longitude: 31.2357,
          address: 'Cairo, Egypt'
        },
        skills: ['Furniture Making', 'Wood Carving'],
        pricing: { minimum: 200 }
      }),
      new Artisan({
        id: '2',
        name: 'Mohamed Ali',
        category: 'Blacksmith',
        rating: 4.6,
        location: {
          latitude: 30.0566,
          longitude: 31.2262,
          address: 'Giza, Egypt'
        },
        skills: ['Metal Gates', 'Decorative Iron Work'],
        pricing: { minimum: 300 }
      })
    ];
  }
}