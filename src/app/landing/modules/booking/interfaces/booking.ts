
export interface CreateBookingRes {
  success: boolean,
  message : string ,
  data : Booking

}
export interface Booking {
  booking : BookingData

}
export interface BookingData {

  startDate: string,
  endDate: string,
  totalPrice: Number,
  user: string ,  //id
  room:  string ,  //id
  status:  string ,
  _id: string ,  // booking id
  createdAt:  string ,
  updatedAt:  string ,
}


export interface BookingDataParams {
  startDate: string,
  endDate: string,
  totalPrice: Number,
  room:  string ,  //id
}


