import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };

  id: number;
  user: User = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

 
onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe( 
      data =>{
      this.goToUserList();
    }
    );
  }

  /*onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe((v) => console.info(v));
  }*/

  goToUserList(){
    this.router.navigate(['/userlist']);
  }
}