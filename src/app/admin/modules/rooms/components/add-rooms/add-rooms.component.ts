import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})

export class AddRoomsComponent implements OnInit {

  activeRoomID:null|number =0 ;
  isEditMode : boolean = false;
  isViewMode : boolean = false ;
  isFormDisabled: any ;
  addRoomForm !: FormGroup
  files: File[] = [];
  private _ActivatedRoute: any;
  constructor(private _RoomsService:RoomsService ,
    private fb:FormBuilder ,
    private _Router:Router ,
    private _ToastrService:ToastrService
  ) {
    this.activeRoomID =Number(this._ActivatedRoute.snapshot.paramMap.get('_id') )
    this.isFormDisabled = this._ActivatedRoute.snapshot.paramMap.get('formDisabled')
 }



  ngOnInit(): void {
    this.addRoomForm = this.fb.group({
      roomNumber: ['' , Validators.required ],
      price: ['' , Validators.required ],
      discount: ['' , Validators.required ],
      capacity:['' , Validators.required ],
      // facilities:['' , Validators.required ],
      facilities: this.fb.array([this.fb.control('')])  , // FormArray of controls
      images: [null]                   // Placeholder for image files
    })

         // pass Data to Form (View & Edit)
         if(this.activeRoomID !== null || this.activeRoomID !== undefined){
          //call get room by id
          // this.onGettingRecipeById(this.activeRoomID)
        }
        // View Mode
        if( this.isFormDisabled == 'true' ){ this.isViewMode= true }
        if(this.isViewMode){
           this.addRoomForm.disable()
           }
        // Edit Mode
        if(this.activeRoomID && this.isFormDisabled == null){ this.isEditMode= true }
  }

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
    this.addRoomForm.patchValue({ images: this.files });
  }

  onRemove(event: File) {
    this.files = this.files.filter(f => f !== event);
    this.addRoomForm.patchValue({ images: this.files });
  }
// ------------

  onSubmit(form:FormGroup):void{
    console.log(form.value);
    this.addRoomForm = form
    const formData = new FormData();

     // // Append all controls
     Object.entries(this.addRoomForm.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    // Append array of inputs
    this.facilities.controls.forEach((control, index) => {
      formData.append(`facilities[${index}]`, control.value);
    });
    // Append files
    this.files.forEach((file, index) => {
      formData.append(`images`, file, file.name);
    });


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






  // addRoomForm : FormGroup = new FormGroup({
  //   roomNumber: new FormControl('' , [Validators.required ]),
  //   price: new FormControl('' , [Validators.required ]),
  //   discount: new FormControl('' , [Validators.required ]),
  //   capacity:new FormControl('' , [Validators.required ]),
  //   facilities:new FormControl('' , [Validators.required ]),
  // })


  // onSelect(event: { addedFiles: any; }) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }
  // onRemove(event: File) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

}
