import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { FacilitiesResponseData, Facility ,FacilitiesApiResponse } from '../../../facilities/interfaces2/facilities';

interface FileWithPreview extends File {
  preview?: string;
}

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})

export class AddRoomsComponent  implements OnInit , OnDestroy {

  activeRoomID!:any ;
  isEditMode : boolean = false;
  isViewMode : boolean = false ;
  isFormDisabled: any ;
  addRoomForm !: FormGroup
  files: any[] = [];
  facilities: Facility[] = [];
  viewImg!:string[]

  constructor(private _RoomsService:RoomsService ,
    private fb:FormBuilder ,
    private _Router:Router ,
    private _ActivatedRoute:ActivatedRoute ,
    private _ToastrService:ToastrService ,
    private _FacilitiesService:FacilitiesService
  ) { }

 ngOnInit(): void {
  this.getAllFacilities()
  this.activeRoomID =this._ActivatedRoute.snapshot.paramMap.get('id')
  this.isFormDisabled = this._ActivatedRoute.snapshot.queryParamMap.get('isFormDisabled')
  //  console.log( this.activeRoomID , this.isFormDisabled);
  //form
  this.addRoomForm = this.fb.group({
    roomNumber: ['' , Validators.required],
    price: ['' , Validators.required],
    capacity: ['' , Validators.required],
    discount: [''],
    images: [[]],
    createdAt: [''],
    updatedAt: [''],
    facilities: [[]],
  });
  //  pass Data to Form (View & Edit)
   if(this.activeRoomID){
     //  get rooms by id
     this.viewRoom(this.activeRoomID)
     this.isEditMode=true
   if( this.isFormDisabled ){
      // View Mode
      this.isViewMode =true
      this.isEditMode =false
      }
   }

 }

  Submit(form:FormGroup):void{

    let formValues = form.value
    const formData = new FormData();
    for(const key in formValues){
      if (formValues.hasOwnProperty(key)) {  formData.append(key, formValues[key]) }
    }
      // facilities
      if (formValues.key === 'facilities' && Array.isArray(formValues.value)) {
        formValues.value.forEach((facility:any) => {
          formData.append('facilities', facility._id);
        });
      }
      // img
    if(this.files.length>0){
      this.files.forEach(file => {
        formData.append('images', file);
      });
    }

    if(!this.activeRoomID ){
      //call Add
      this.addRoom(formData)
    }else{
      // call Edit
      this.updateRoom(this.activeRoomID , formData)
    }

  }


  addRoom(formData :any):void{

    this._RoomsService.addRoom(formData).subscribe({
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
        //   this._ToastrService.success('Room Added successfully')
        //   this._Router.navigate(['/admin/rooms/rooms'])
        // },
      })


  }

  viewRoom(id:number| string):void{
    this._RoomsService.viewRoomDetails(id).subscribe({
      next: (res) => {
        this.addRoomForm.disable()
        const room = res.data.room;
        this.addRoomForm.patchValue({
          roomNumber: room.roomNumber,
          price: room.price,
          capacity: room.capacity,
          discount: room.discount,
          createdBy: {
            _id: room.createdBy?._id,
            userName: room.createdBy?.userName
          }
        });
        this.viewImg =  res.data.room.images;
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(' error in View Room')
      },

    })

    if(this.isViewMode){
      this.addRoomForm.disabled
    }

  }

  updateRoom(id:number| string , formData : any):void{
    this._RoomsService.updateRoom(id , formData).subscribe({
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
      }
  })
  }

 getAllFacilities(): void {
  this._FacilitiesService.getFacilities(1,10).subscribe({
    next: (response) => {
      // console.log(response.data.facilities);
      this.facilities = response.data.facilities;
    },
    error: (err) => {
      console.log(err);
    },
  });
}

  // Dropzone file event
  onSelect(event: any) {
    const selectedFiles = event.addedFiles;
    for (let file of selectedFiles) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        (file as any).preview = e.target.result;
        this.files.push(file);
        this.addRoomForm.patchValue({ images: this.files });
      };
      reader.readAsDataURL(file);
    }
    // this.files.push(...event.addedFiles);
  }
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
// ------------
ngOnDestroy(): void {
    this.isViewMode=false
    this.isEditMode=false
}



}

    // let formValues = form.value
    // const formData = new FormData();
      // --------------------------
     // // Append all controls
    //  for(const key in formValues){
    //   if (formValues.hasOwnProperty(key)) {  formData.append(key, formValues[key]) }
    // }
    // // Append array of inputs
    // this.facilities.controls.forEach((control, index) => {
    //   formData.append(`facilities[${index}]`, control.value);
    // });
    // // Append files
    // this.files.forEach((file, index) => {
    //   formData.append(`images`, file, file.name);
    // });
    // --------------------------
  //  formData = this.addRoomForm.value;
    // const payload = {
    //   ...formData,
    //   // facilities: formData.facilities.map((f: any) => f._id),
    //   // images: this.files.map((img: File) => img.name)
    // };
    // console.log('Sending to API:', payload);  // Send `payload` to your API
// ---------------------------
//     const formData = new FormData();
//     Object.keys(form.controls).forEach((key) => {
//       const value = form.get(key)?.value;
//       if (key === 'facilities' && Array.isArray(value)) {
//         value.forEach((facility) => {
//           formData.append('facilities', facility._id);
//         });
//       } else {
//         formData.append(key, value);
//       }
//     });
// ---------------------------
   // const formData = new FormData();
    // Object.keys(form.controls).forEach((key) => {
    //   const value = form.get(key)?.value;
    //   //facilities
    //   if (key === 'facilities' && Array.isArray(value)) {
    //     value.forEach((facility) => {
    //       formData.append('facilities', facility._id);
    //     });
    //   }
      // // img
      // if(this.files.length>0){
      //   this.files.forEach(file => {
      //     formData.append('images', file);
      //   });
      //  }
      // //all controls
      // else {
      //   formData.append(key, value);
      // }
    // })
