import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
    nom="amalll";
  constructor(private router : Router){
    
    
  
  }
  isLoginPage(): boolean {
    
    return this.router.url === '/home';
  }

}
