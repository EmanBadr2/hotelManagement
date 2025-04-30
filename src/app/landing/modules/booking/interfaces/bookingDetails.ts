
export interface BookingDetailsRes {
  success: boolean,
  message : string ,
  data : BookingDetailsData
}

export interface BookingDetailsData {
  booking : BookingDetails
}
export interface BookingDetails {
  _id: string ,  //  booking id
  startDate: string,
  endDate: string,
  totalPrice: number,
   user: user ,
   room :room ,
   status:  string ,
   createdAt:  string ,
   updatedAt:  string ,
}

export interface user {  _id: string  , userName : string }
export interface room { _id: string , roomNumber: string }
