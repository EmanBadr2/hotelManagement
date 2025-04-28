export interface commentRes{
  success: boolean,
  message: string,
  data: any ,
}
export interface CommentData {
  roomComments :roomComments[] ,
  totalCount: Number
}
export interface roomComments {
  _id: string,  //  commentID
  room: room,
  user: user,
  comment: string,
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

