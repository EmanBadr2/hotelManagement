import { Component, Input, OnInit } from '@angular/core';
import { RoomDetailsService } from '../../services/room-details.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentRateService } from '../../services/comment-rate.service';
import { roomComments } from '../../interfaces/comment';
import { StorageService } from 'src/core/services/storage.service';
import { roomReviews } from '../../interfaces/review';
import { AuthDialogComponent } from 'src/app/landing/components/auth-dialog/auth-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.scss']
})
export class RateCommentComponent implements OnInit {

  @Input() roomID :any
 userID : string| null=''
  userName : string| null=''
  comment :string=''
  review :string=''
  rating :number =0
  roomComments:roomComments[]=[]
  roomReviews:roomReviews[] =[]
  showAllCommentReview : boolean =false

  constructor( private _CommentRateService:CommentRateService ,
    private _ActivatedRoute:ActivatedRoute ,
    private _StorageService:StorageService ,
    private _ToastrService:ToastrService,
    private dialogService: DialogService
  ){
    // this.roomID = this._ActivatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if(this.roomID){
       this.allRoomComments()
       this.allRoomReviews()
    }
    this.userID=this._StorageService.userID
    this.userName=this._StorageService.userName

  }

  allRoomComments(){
    this._CommentRateService.allRoomComments(this.roomID).subscribe({
      next:(res)=> {
        console.log(res);
        this.roomComments= res.data.roomComments
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
        this.allRoomComments()
      },
      error :(err) =>{
        this.checkAuth();
        console.log(err);
      },
    })

  }

  deleteComment(commentID:string){
    this._CommentRateService.deleteComment( commentID ,this.roomID ).subscribe({
      next:(res)=> {
        console.log(res);
        this._ToastrService.success(res.message)
        this.allRoomComments()
      },
      error:(err) =>{
        console.log(err);
        this._ToastrService.error(' Error ')
      },
    })

  }
  updateComment(commentID:string){
    let data = {comment: this.comment}
    this._CommentRateService.updateComment( commentID , data).subscribe({
      next:(res)=> {
        console.log(res);
        this._ToastrService.success(res.message)
      },
      error:(err) =>{
        console.log(err);
        this._ToastrService.error(' Error ')
      },
    })
    this.allRoomComments()
  }
  // --------------------
  allRoomReviews(){
    this._CommentRateService.allRoomReviews(this.roomID).subscribe({
      next:(res)=> {
        console.log(res);
        this.roomReviews = res.data.roomReviews
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
      this.allRoomReviews()
    },
    error :(err) =>{
      console.log(err);
      this.checkAuth();
    },
  })
  }



  checkAuth() {
    if (localStorage.getItem('isUser') == 'true'){
      return;
    } else {
      this.dialogService.open(AuthDialogComponent, {
        header: '',
        width: '30vw',
      });
    }
  }
}
