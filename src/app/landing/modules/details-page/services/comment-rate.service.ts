import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentRateService {

  constructor( private _HttpClient:HttpClient) { }

  // Comment
    allRoomComments(roomID:string):Observable<any>{
      return this._HttpClient.get(`portal/room-comments/${roomID}`)
    }
    createComment(data:any):Observable<any>{
      return this._HttpClient.post(`portal/room-comments` , data)
    }
    updateComment(commentID:string ,data:any ):Observable<any>{
      return this._HttpClient.patch(`portal/room-comments/${commentID}` , data)
    }
    deleteComment(commentID:string ,roomID:string ):Observable<any>{
      return this._HttpClient.delete(`portal/room-comments/${commentID}` ,{params : {"roomId": roomID}})
    }
    // Review
    allRoomReviews(roomID:string):Observable<any>{
      return this._HttpClient.get(`portal/room-reviews//${roomID}`)
    }
    createReview(data:any):Observable<any>{
      return this._HttpClient.post(`portal/room-reviews/` , data)
    }



}
