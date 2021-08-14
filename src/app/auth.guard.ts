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

  canActivate() : boolean {
    debugger;
    
     localStorage.removeItem('token');
    // localStorage.setItem('token','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoaWhvd2FyZXlvdSIsInVzZXJpZCI6IjYwIiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiNDYzMDI4YzUtOTQwMy00ZGZmLWIzMDctNDJiYjgyZGE4ODk2IiwiZXhwIjoxNjI4ODQxMjMwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.lRQOCLI2geMnQNwLJNcGOTVESCNY5lLgTpjrlcAVTa8');
    if(!localStorage.getItem('token')){
     this.router.navigate(['/Login'])
     window.alert(" Please Log In")
     return true;
   }
  else
    return true;
  }

}