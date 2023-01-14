import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'portfolio-maxi';
  myPortfolio: any;
  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('app', this.authService.isLoggedIn)
    this.authService.onAuthChange()
  }

  logout() {
    this.authService.logout()
      .then((res) => {
        console.log(res)
        this.router.navigate(['']);
        // this.authService.isLoggedIn = false;
      })
      .catch(error => console.log(error));
  }
}