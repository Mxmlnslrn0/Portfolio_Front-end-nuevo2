import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})
export class HeaderModalComponent implements OnInit {
form: FormGroup

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

}
