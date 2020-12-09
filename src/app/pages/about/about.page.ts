import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.reload();
    // tslint:disable-next-line: deprecation

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
