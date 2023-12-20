import { Component } from '@angular/core';

import { CakeService } from '../services/cake.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cake } from '../models/cake';


@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrl: './addcake.component.css'
})
export class AddcakeComponent {


  mycake: Cake = {
 
  }


  constructor(private cakeserv: CakeService, private router: Router,private formbuilder:FormBuilder,private _snackBar: MatSnackBar) { }

   addForm=this.formbuilder.group({
    cakeName:[''],
    cakeDescription:[''],
    cakePrice:[0],
    cakeRating:[0],
    isEgg:[''],
    flavour:['']
   })

onSubmit(){
  alert('success')
}


  addCake() {
    this.cakeserv.addCake(this.mycake).subscribe((data) => {
      // this.mycake=data;
      this._snackBar.open('New Cake Added successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
});
      alert(data.id);
      //this will take us to home component automatically and oninit called
      this.router.navigateByUrl("ViewCake")

    })
  }
  canClose(){
    if(this.addForm.dirty){
      let result =confirm('Leaving this page will cause any unsaved data to be lost.\nAre you sure you want to leave this page')
      return result
    }else{
      return true
    }
  }

}
