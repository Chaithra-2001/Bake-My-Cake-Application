import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchString: string = '';
  constructor(private cakeserv: CakeService, private router:Router, public loginservice:LoginService) { }

  displayCake: Cake[] = []
  ngOnInit(): void {
    this.getAllCake();
  }

  getAllCake() {
    this.cakeserv.getCakes().subscribe((cakedata) => { this.displayCake = cakedata }
    )
  }
  filter() {
    this.displayCake = this.displayCake.filter((data) => {
      return data.name?.toLowerCase().startsWith(this.searchString.toLowerCase());
  });




  }
    
  order() {
    // alert("you need to login to place order")
    // // Check if the user is logged in before navigating to the "Buy Now" page
    // if (this.loginservice.isUserLoggedIn===true) { // You need to replace this with the actual condition
    //   this.router.navigateByUrl('order')
    // } else {
    //   // Redirect to the login page
    //   this.router.navigateByUrl('/login')
    // }

    




  }

  }
// // Inside your component class
// showDetails(cakeId: string) {
//   this.router.navigateByUrl("viewCakedetails/" ,this.displayCake.id);
//   // Alternatively, you can implement logic to display details in a modal or other UI component.
// }

// view(){
//   this.router.navigateByUrl("viewCakedetails/:id",)
// }
