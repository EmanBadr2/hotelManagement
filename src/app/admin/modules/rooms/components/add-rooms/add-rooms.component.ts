import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})

export class AddRoomsComponent  implements OnInit{

  activeRoomID!:any ;
  isEditMode : boolean = false;
  isViewMode : boolean = false ;
  isFormDisabled: any ;

  addRoomForm !: FormGroup
  files: File[] = [];

  constructor(private _RoomsService:RoomsService ,
    private fb:FormBuilder ,
    private _Router:Router ,
    private _ActivatedRoute:ActivatedRoute ,
    private _ToastrService:ToastrService
  ) { }

 ngOnInit(): void {
  this.activeRoomID =this._ActivatedRoute.snapshot.paramMap.get('id')
  this.isFormDisabled = this._ActivatedRoute.snapshot.queryParamMap.get('isFormDisabled')
  // console.log( this.activeRoomID , this.isFormDisabled);
     if(this.activeRoomID){ //  pass Data to Form (View & Edit)
     //  get rooms by id
      this.isEditMode= true
      this.isViewMode= true
    if( this.isFormDisabled == 'true' || true){
      // View Mode

       this.isEditMode= false
       this.addRoomForm.disable()
      }

   }
   console.log('edit' , this.isEditMode);
   console.log('view' , this.isViewMode);



 }

// -----------
   // Getter for easy access
   get facilities(): FormArray {
    return this.addRoomForm.get('facilities') as FormArray;
  }
  addFacilities() {
    this.facilities.push(this.fb.control(''));
  }
  removeFacilities(index: number) {
    this.facilities.removeAt(index);
  }
// ---------
  // Dropzone file event
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
// ------------

  Submit(form:FormGroup):void{
    console.log(form.value);
    this.addRoomForm = form
    let formValues = form.value
    const formData = new FormData();

   // --------------------------
     // // Append all controls
     for(const key in formValues){
      if (formValues.hasOwnProperty(key)) {  formData.append(key, formValues[key]) }
    }
    // Append array of inputs
    this.facilities.controls.forEach((control, index) => {
      formData.append(`facilities[${index}]`, control.value);
    });
    // Append files
    this.files.forEach((file, index) => {
      formData.append(`images`, file, file.name);
    });
    // --------------------------

    if(!this.activeRoomID ){
      //call Add
      this.addRoom(formData)
    }else{
      // call    Edit/Updata
      this.onUpdateRoom(this.activeRoomID , formData)
    }

  }


  addRoom(formData :any):void{
    this._RoomsService.onAddRoom(formData).subscribe({
      next: (res) => {
        console.log('done');
        console.log(res);
        this._ToastrService.success('Room Added successfully')
        this._Router.navigate(['/admin/rooms/rooms'])

      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(' error in Adding Room')
      },
      // complete:() =>{
      //   this._Router.navigate(['/admin/rooms/rooms'])
      // },
    })

  }

  viewRoom(id:number| string):void{
    this._RoomsService.viewRoomDetails(id).subscribe({
      next: (res) => {
        console.log('view done');
        console.log(res);
        //path value to my form
        this.addRoomForm.patchValue({
          // roomNumber: res.data.rooms.roomNumber,
          // price: res.,
          // discount: res.  ,
          // capacity:res.  ,
          // // facilities:res.,
          // facilities:
          // images:

         }
       );

      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(' error in View Room')
      },

    })



  }

  onUpdateRoom(id:number| string , formData : any):void{
    this._RoomsService.editRoom(id , formData).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success('Room Updated Successfully ')
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(' error in edit Room')
      },
      complete:() =>{
        this._Router.navigate(['/admin/rooms/rooms'])
      },
    })
  }




}
