import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public show = false;

  constructor() { }

  ngOnInit(): void {
  }


  showLogin(){
    this.show = true;
  }

  hideLOgin(){
    this.show = false;
  }
}
