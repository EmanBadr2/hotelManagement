import { Component } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})

export class AddRoomsComponent {

  files: File[] = [];
  constructor(private _RoomsService:RoomsService){}
  addRoomForm : FormGroup = new FormGroup({
    roomNumber: new FormControl('' , [Validators.required ]),
    price: new FormControl('' , [Validators.required ]),
    discount: new FormControl('' , [Validators.required ]),
    capacity:new FormControl('' , [Validators.required ]),
    facilities:new FormControl('' , [Validators.required ]),
  })


  onSubmit():void{
    console.log('ll');

  }










  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
