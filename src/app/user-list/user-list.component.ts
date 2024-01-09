import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


import { User } from '../user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User[];
  content?: string;
  isLoggedIn = true;
  message = '';



  constructor(private userService: UserService,
    private router: Router) { }


    ngOnInit(): void {
      this.getUser();
    }

    private getUser(){
      this.userService.getUserList().subscribe(data => {
        this.user = data;
      });
    }


    deleteUser(id: number){
      this.userService.deleteUser(id).subscribe( data => {
        console.log(data);
        this.getUser();
        
      })
      alert("L'utilisateur a été supprimé avec succès");
      console
    }

    

    updateUser(id: number){
      this.router.navigate(['update-user', id]);
    }



    userDetail(id: number){
      this.router.navigate(['user-detail', id]);
    }
}