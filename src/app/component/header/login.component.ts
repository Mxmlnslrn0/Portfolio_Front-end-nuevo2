import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,) { this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    ) }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.form.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['']);
      })
      .catch(error => console.error(error));
  }
}
