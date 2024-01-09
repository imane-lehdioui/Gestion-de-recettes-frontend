import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from '../_services/offre.service';
import { Offre } from '../offre';

@Component({
  selector: 'app-creeroffre',
  templateUrl: './creeroffre.component.html',
  styleUrls: ['./creeroffre.component.css']
})
export class CreeroffreComponent implements OnInit {

  offre: Offre = new Offre();

  constructor(private offreService: OffreService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  goOffreListe(){
    this.router.navigate(['/offre']);
  }


  saveEmployee(){
    this.offreService.createOffre(this.offre).subscribe( data =>{
      console.log(data);
      this.goOffreListe();
    },
    error => console.log(error));
  }





  
}