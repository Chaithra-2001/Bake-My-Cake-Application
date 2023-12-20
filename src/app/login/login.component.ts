import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide=true
  user = { email:"",password: "" }
constructor(private userserv:UserService,private _snackBar: MatSnackBar,private router:Router,private loginservice:LoginService){}

login() {
  this.userserv.checkEmailAndPassword(this.user.email, this.user.password).subscribe(
    (data) => {
      // alert(data.length)
      if (data.length == 1) {
        this.loginservice.canlogin(data)
        this._snackBar.open(' Login Succesfull', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigateByUrl('')
      }
      else {
        //checkIfUserExistsOrNot checking user existance
        this.userserv.checkIfUserExistsOrNot(this.user.email).subscribe(
          (data) => {
            if (data.length == 1) {
              alert("Entered password incorrect")
            }
            else {
              alert("User Not registered");
            }
          }
        )
      }
    }
  )
 
}
      
  
 
}




 




  




