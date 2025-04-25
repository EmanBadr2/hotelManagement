export interface Curd {
    _id: string;
    roomNumber: string;
    price: number;
    capacity: number;
    discount: number;
    images: string[];
    facilities: string[];
    isBooked: boolean;
  }
export interface Ads {
  room: {
    _id: string;
    roomNumber: string;
    price: number;
    capacity: number;
    discount: number;
    images: string[];
    facilities: string[];
  }
  isActive: boolean;
  createdBy: {
    _id: string;
    userName: string;
  };
}
