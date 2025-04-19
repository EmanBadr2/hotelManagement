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
    user: {
      _id: string;
      userName: string;
    };
    room: {
      _id: string;
      roomNumber: string;
    };
    status: string;
    createdAt: string;
    updatedAt: string;
    stripeChargeId?: string;
  }
  
  export interface BookingResponseData {
    success: boolean;
    message: string;
    data: {
      booking: Booking[];
      totalCount: number;
    };
  }
  
  
  export interface BookingApiResponse {
    success: boolean;
    message: string;
    data: {
      booking: Booking[];
      totalCount: number;
    };
  }
  