import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit() {
  }

  logoutAction() {
    this.authService.logout();
  }
     // test refresh function
     doRefresh(event) {
      console.log('Begin async operation');
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }


reload() {
  this.router.navigate(['/home']);
}

}
