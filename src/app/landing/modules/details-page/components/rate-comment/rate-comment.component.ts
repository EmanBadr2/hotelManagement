import { Component, Input, OnInit } from '@angular/core';
import { RoomDetailsService } from '../../services/room-details.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentRateService } from '../../services/comment-rate.service';



@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.scss']
})
export class RateCommentComponent implements OnInit {


  @Input() roomID :any
  commentID !:string
  comment :string=''
  review :string=''
  rating :number =0



  constructor( private _CommentRateService:CommentRateService ,
    private _ActivatedRoute:ActivatedRoute ,
    private _ToastrService:ToastrService
  ){
    // this.roomID = this._ActivatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if(this.roomID){
       this.allRoomComments()
       this.allRoomReviews()
    }

  }

  allRoomComments(){
    this._CommentRateService.allRoomComments(this.roomID).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }

  createComment(){
    console.log(this.comment);

    let data ={ roomId: this.roomID, comment: this.comment }
    this._CommentRateService.createComment(data).subscribe({
      next:(res)=> {
        console.log(res);
        this._ToastrService.success(res.message)
      },
      error :(err) =>{
        console.log(err);
        this._ToastrService.error('Error ')
      },
    })
  }

  deleteComment(){
    this._CommentRateService.deleteComment( this.commentID ,this.roomID ).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }
  updateComment(){
    let data = {comment: this.comment}
    this._CommentRateService.updateComment( this.commentID , data).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })

  }
  // --------------------
  allRoomReviews(){
    this._CommentRateService.allRoomReviews(this.roomID).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }

  createReview(){
    let data= { roomId: this.roomID, rating: this.rating, review: this.review }
   this._CommentRateService.createReview(data).subscribe({
    next:(res)=> {
      console.log(res);
      this._ToastrService.success(res.message)
    },
    error :(err) =>{
      console.log(err);
      // if(err.message =='User has already added a review for this room'){
      //   this._ToastrService.error('You have already added a review for this room.')
      // }
      this._ToastrService.error(err.error.message)
    },
  })
  }

}
