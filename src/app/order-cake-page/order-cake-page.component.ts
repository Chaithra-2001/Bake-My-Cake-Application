import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';
import { UserService } from '../services/user.service';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Cake } from '../models/cake';
import { OrderService } from '../services/order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-order-cake-page',
  templateUrl: './order-cake-page.component.html',
  styleUrl: './order-cake-page.component.css'
})

export class OrderCakePageComponent implements OnInit {


  constructor(private ar: ActivatedRoute, private cakeserv: CakeService, public loginservice: LoginService, private userserv: UserService, private order: OrderService, private fb: FormBuilder) { }

  cakedisplay: Cake = {}
  myorderinfo: Order = {

    emailid: '',
    firstName: '',
    phone: '',
    address: '',
    cakeName: '',
    cost: 0,
    flavour: '',
    isegg: '',
    weight: 0,
    totalPrice: 0,
    noofItems: 0,
    CakedeliveryDate: '',
    messageonCake: '',
  }





  message: string = ''
  orderDate: string = ""
  selectedQuantity = 1;
  // orderdate:number | undefined
  totalPrice = 0

  userEnteredQuantity: number = 1;
  //  noofitems=1;
  // selectedWeight: number | null = null;
  // This variable will store the selected option

  selectedOption: string = '';
  panelOpenState = false;

  selectOption(option: string): void {
    this.selectedOption = option;
  }


  updateQuantity(quantity: number) {
    this.selectedQuantity = quantity;
    this.calculateTotalPrice();
  }



  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCakeDetails(cakeid);
      this.myorderinfo.emailid = this.loginservice.emailid
      this.myorderinfo.firstName = this.loginservice.username
      this.myorderinfo.phone = this.loginservice.phone
      this.myorderinfo.address = this.loginservice.address
      this.myorderinfo.weight = this.selectedQuantity;

    })
  }




  calculateTotalPrice() {

    if (this.cakedisplay && this.cakedisplay.price !== undefined) {
      this.totalPrice = this.cakedisplay.price * this.selectedQuantity * this.userEnteredQuantity;
    } else {

      this.totalPrice = 0;
    }
  }

  getOneCakeDetails(id: any) {
    this.cakeserv.getCakedetailsbyid(id).subscribe((data) => {
      this.cakedisplay = data;
      this.myorderinfo.cakeName = this.cakedisplay.name;
      this.myorderinfo.cost = this.cakedisplay.price;
      this.myorderinfo.isegg = this.cakedisplay.isegg;
      this.myorderinfo.flavour = this.cakedisplay.flavour;
      this.myorderinfo.messageonCake
      this.myorderinfo.CakedeliveryDate
      this.myorderinfo.noofItems = this.userEnteredQuantity
    
      // this.myorderinfo.weight = this.selectedQuantity;
     
      // this.myorderinfo.= this.cakedisplay.name;

      this.calculateTotalPrice();
      this.myorderinfo.totalPrice = this.totalPrice;

    })
  }

   placeOrder() {
    // let myorder: Order = {
    //   emailid: this.loginservice.emailid,
    //   firstName: this.loginservice.username,
    //   phone:this.loginservice.phone,
    //   cakeName: this.cakedisplay.name,
    //   id: this.cakedisplay.id,
    //   cost:this.cakedisplay.price,
    //   weight:this.selectedQuantity,
    //   totalPrice:this.totalPrice,
    //   address:this.loginservice.address,
    //   noofItems:this.userEnteredQuantity,
    //   CakedeliveryDate:this.orderDate,
    //   messageonCake:this.message,
    //   isegg:this.cakedisplay.isegg,
    //   flavour:this.cakedisplay.flavour
    // };
     this.order.placeorder(this.myorderinfo).subscribe((data) =>
      this.cakedisplay = data

    )
    alert(" order placed succesfull")

  }


}











