import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { OffreService } from '../_services/offre.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  offre: Offre[];
  content?: string;

 
  constructor(private offreService: OffreService,
    private router: Router) { }


    ngOnInit(): void {
      this.getOffre();
    }

    private getOffre(){
      this.offreService.getOffre().subscribe(data => {
        this.offre = data;
      });
    }


   /* deleteOffre(){
      this.offreService.deleteOffre(id).subscribe( data => {
        console.log(data);
        this.getOffre();
      })
    }*/

}
