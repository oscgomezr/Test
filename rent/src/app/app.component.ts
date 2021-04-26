import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rent';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.validateLogin();
  }


  validateLogin(): void {
    let userName = localStorage.getItem('username')
    if (userName) {
      localStorage.removeItem('username')
      this.router.navigateByUrl('/Home')
    } else {
      this.router.navigateByUrl('/Login')
    }
  }

}
