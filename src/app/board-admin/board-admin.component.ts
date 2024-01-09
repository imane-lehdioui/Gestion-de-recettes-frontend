import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  user: User[];
  content?: string;

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
    }

    updateUser(id: number){
      this.router.navigate(['update-user', id]);
    }
}
