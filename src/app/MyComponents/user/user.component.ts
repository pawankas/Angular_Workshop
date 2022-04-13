// import { ValidationService } from './../../services/validation-service.service';
import { Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


 import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { user } from 'src/app/utilities/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new user(1, "", "");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new user(42, '', '');
  }

  userForm: any;

  // constructor(private formBuilder: FormBuilder) {
  //   this.userForm = this.formBuilder.group({
  //     id: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', [Validators.required, ValidationService.emailValidator]],

  //   });

  //   saveUser() {
  //     if (this.userForm.dirty && this.userForm.valid) {
  //       alert(
  //         `FirstName: ${this.userForm.value.firstName} LastName: ${this.userForm.value.lastName}`
  //       );
  //     }
  //   }

}


// registrationForm=new FormGroup(
//   {name: new FormControl('',[Validators.required]),
//   password: new FormControl('',Validators.required),
//   confirmPassword:new FormControl('' ,Validators.required)});

// constructor() { }

// ngOnInit(): void {
// }

// onSubmit()
// {
//     console.log(this.registrationForm.value)
// }
