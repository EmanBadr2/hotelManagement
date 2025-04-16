export interface IAddRoomRes
{
  success: boolean,
  message: string,
  data:IData
}
export interface IData {
  room: IAddRoomData
}

export interface IAddRoomData{
    roomNumber:  string|number,
    price: number,
    capacity: number,
    discount: number,

    facilities: string[] |number[],   // id arr
    createdBy:  string|number,   // admin id
    images: string[],
    _id: string|number,   //room ID
    createdAt: Date,
    updatedAt: Date
  }

