import { Component, OnInit } from '@angular/core';
import { RoomDetailsService } from '../../services/room-details.service';

@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.scss']
})
export class RateCommentComponent implements OnInit {

  roomID !:string
  commentID !:string
  comment !:string

  constructor( private _RoomDetailsService:RoomDetailsService){}
  ngOnInit(): void {

  }
  
  allRoomComments(){
    this._RoomDetailsService.allRoomComments(this.roomID).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }

  createComment(){
    let data ={ roomId: this.roomID, comment: this.comment }
    this._RoomDetailsService.createComment(data).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }

  deleteComment(){
    this._RoomDetailsService.deleteComment( this.commentID ,this.roomID ).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }


}
