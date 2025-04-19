export interface IAdsCreate{
    room:string;
    discount:number;
    isActive:boolean
}
// ads.model.ts

export interface AdResponse {
    success: boolean;
    message: string;
    data: {
      ads: Ad[];
      totalCount: number;
    };
  }
  
  export interface Ad {
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
    facilities: string[]; // Assuming these are just IDs, otherwise create a Facility interface
    createdBy: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface User {
    _id: string;
    userName: string;
  }
  