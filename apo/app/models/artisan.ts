import { Observable } from '@nativescript/core';

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
}

export class Artisan extends Observable {
  id: string;
  name: string;
  category: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  skills: string[];
  rating: number;
  reviews: Review[];
  pricing: {
    minimum: number;
    hourlyRate?: number;
  };
  gallery: string[];
  description: string;
  contactInfo: {
    phone: string;
    email: string;
  };

  constructor(data: Partial<Artisan>) {
    super();
    Object.assign(this, data);
  }
}