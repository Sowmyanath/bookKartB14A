import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subscribe(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  

  constructor() { }
  isUserLoggedIn(){
    return false;
}

  // isPayment() {
  //   return true;
  
  
}
