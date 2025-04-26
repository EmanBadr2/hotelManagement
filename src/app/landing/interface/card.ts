export interface Card {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: Facility[];
  createdBy: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  isBooked: boolean;
}
export interface Facility {
  _id: string;
  name: string;
}
export interface Ads {
  _id: string;
  isActive: boolean;
  room: Room;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
}
export interface Room {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: string[];
  createdBy: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  userName: string;
}