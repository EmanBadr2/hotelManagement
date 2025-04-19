export interface User {
    _id: string;
    userName: string;
  }
  
  export interface Room {
    _id: string;
    roomNumber: string;
  }
  
  export interface Booking {
    _id: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
    user: User;
    room: Room;
    status: 'pending' | 'completed' | string;
    createdAt: string;
    updatedAt: string;
    stripeChargeId?: string;
  }
  
  export interface BookingResponseData {
    booking: Booking[];
    totalCount: number;
  }
  
  export interface BookingApiResponse {
    success: boolean;
    message: string;
    data: BookingResponseData;
  }
  