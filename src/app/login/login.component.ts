import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private as : AuthService,  private router:Router ){
    
  }
signin():void{
  //injection de dependance 
this.as.doGoogleLogin().then(()=>{
  this.router.navigate(['/member'])
})
 
}
}
