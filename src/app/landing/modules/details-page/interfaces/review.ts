
export interface ReviewRes{
  success: boolean,
  message: string,
  data: reviewData ,
  totalCount: Number
}
export interface reviewData {
  roomReviews :roomReviews[] ,
  totalCount :number
}


export interface roomReviews {
  _id: string,  //  commentID
  room: room,
  user: user,
  review: string,
  rating:number
  createdAt: string,
  updatedAt: string,
}

export interface user {
  _id:  string,
  userName: string,
  profileImage: string,
}
export interface room{
  _id:string,
  roomNumber: number | string
}


