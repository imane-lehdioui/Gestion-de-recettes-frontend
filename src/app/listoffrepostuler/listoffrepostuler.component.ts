import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { User } from '../user';
import { OffreService } from '../_services/offre.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-listoffrepostuler',
  templateUrl: './listoffrepostuler.component.html',
  styleUrls: ['./listoffrepostuler.component.css']
})
export class ListoffrepostulerComponent implements OnInit {

  host : String = "http://localhost:8080"

  offre: Offre[];
  selectedCategorie: string;
  searchResults: Offre[];
  updatedOffre: Offre = new Offre(); // Un objet pour stocker les modifications


  constructor(private offreService: OffreService,
    private router: Router) { }


    ngOnInit(): void {
      this.getOffre();
      
    }

    private getOffre(){
      this.offreService.getOffre().subscribe(data => {
        this.offre = data;
        this.searchResults = data;
      });
    }


    deleteOffre(id: number){
      this.offreService.deleteOffre(id).subscribe( data => {
        console.log(data);
        this.getOffre();
         alert("La recette a été supprimer avec succès");
      })
    }

    offreDetail(id: number){
      this.router.navigate(['/cv', id]);
    }

    searchRecettes() {
      if (this.selectedCategorie) {
        this.offreService.searchRecettesByCategorie(this.selectedCategorie).subscribe(results => {
          this.searchResults = results;
        });
      } else {
        this.searchResults = [];
      }
    }

    updateOffre(id: number){
      this.router.navigate(['postuler', id]);
    }

}
