import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookcartComponent } from './bookcart/bookcart.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'', redirectTo :'/login', pathMatch: 'full'},
  {path: 'Bookcart', component: BookcartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  // {path: '**', redirectTo :'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
