import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {
  constructor(private cakeserv:CakeService,private ar:ActivatedRoute){}

  cartcake:Cake={}
  ngOnInit(): void {
    this.ar.paramMap.subscribe(params=>{
      let cakeid=params.get("id")?? 0;
        //id should be same as path
      this.getcakedetails(cakeid);
  })}


  

  getcakedetails(id:any){
    this.cakeserv.getCakedetailsbyid(id).subscribe((data)=>{
      this.cartcake=data
    })
  }






}
