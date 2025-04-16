
export interface IRoomsRes{
 success: boolean,
    message: string,
    data :IDataFromRes
}
export interface IDataFromRes{
  rooms:IRooms[] ,
  totalCount:number
}
export interface IRooms{
  _id: string|number ,
  roomNumber: string|number ,
  price: number ,
  capacity: number,
  discount: number,
  facilities:IFacilities [] ,
  createdBy :IUser  ,
  images :string[] ,
  createdAt: string,
 updatedAt : string
}

export interface IFacilities {
   _id: string|number,
  name: string
}

export interface IUser {
  _id: string|number,
  userName: string
}

// -----------------------------
