import { UserService } from './../../services/user.service';
// import { ValidationService } from './../../services/validation-service.service';
import { Validators } from '@angular/forms';



 import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { user } from 'src/app/utilities/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
    Users:any;
    constructor(private _userServ: UserService)
    {

    }
     ngOnInit(): void {

      this._userServ.getUsers().subscribe((response)=>{
        this.Users=response;
        // this.Users=response.data;
        console.log(this.Users);
      })
     }

      // users = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new user(1, "", "");

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // newUser() {
  //   this.model = new user(42, '', '');
  // }



}
