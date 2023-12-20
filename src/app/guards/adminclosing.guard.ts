import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AddcakeComponent } from '../addcake/addcake.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EditcakedetailsComponent } from '../editcakedetails/editcakedetails.component';
import { RegisterComponent } from '../register/register.component';


@Injectable({
  providedIn: 'root'
})
export class AdminClosingGuard implements CanDeactivate<AddcakeComponent| EditcakedetailsComponent |RegisterComponent >{
  canDeactivate(component: AddcakeComponent |EditcakedetailsComponent |RegisterComponent,
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot, 
     nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 return component.canClose? component.canClose():true;
  }

}
