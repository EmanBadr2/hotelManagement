
export interface AllBookingRes {
  success: boolean,
  message : string ,
  data : any

}
export interface data {
  myBooking : myBooking[] ,
  totalCount :number
}

export interface myBooking{
   _id: string ,  //  all booking id
  startDate: string,
  endDate: string,
  totalPrice: number,
  user: user ,  
  room:  string ,  //id
  status:  string ,
  createdAt:  string ,
  updatedAt:  string ,

}

export interface user {  _id: string }
