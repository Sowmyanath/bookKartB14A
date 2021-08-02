import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { threadId } from 'worker_threads';
import { AuthService } from './auth.service';
import { HttpClientModule , HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router, private http:HttpClient) {
  }

 login(data:any) : Observable<any>{
   localStorage.removeItem('user');
   localStorage.setItem('user', data);
   return this.http.post("https://bookcart.azurewebsites.net/api/Login", 
    {
      "username": data,
      "password": "Test1234",
    });
 }

  canActivate() {
    this.login("123"); // ad-hoc logic to get user in local storage / mimic login
    //localStorage.removeItem('user');
    if(!localStorage.getItem('user')){
     this.router.navigate(['/Login'])
     return true;
   }
  else
    return true;
  }

}