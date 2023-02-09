import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  user : FormGroup;

  constructor(){
    this.user = new FormGroup({
      name : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]),
      password : new FormControl('', [ Validators.required, Validators.minLength(8) ]),
      confirmPassword : new FormControl('', [ Validators.required ]),
    });
  }

  regiser(){
    console.log(this.user);
  }

}
