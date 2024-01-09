import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CvService } from '../_services/cv.service';
import { CommentaireService } from '../_services/commentaire.service';
import { Cv } from '../cv';
import { TokenStorageService } from '../_services/token-storage.service';
import { OffreService } from '../_services/offre.service';
import { Router } from '@angular/router';
import { Offre } from '../offre';

@Component({
  selector: 'app-imagerecette',
  templateUrl: './imagerecette.component.html',
  styleUrls: ['./imagerecette.component.css']
})
export class ImagerecetteComponent implements OnInit {

  private baseURL='http://localhost:8080/api/test1/upload';

  constructor(private offreService: OffreService,private router: Router,private token: TokenStorageService,private commentaireService: CommentaireService) { }

  host : String = "http://localhost:8080"


  cv : Cv[];
  searchResults: Cv[];
  searchResults2: Offre[];

  currentUser: any;
  id:any;
  idUser:any;
  resultatfinal: any[] = [];
  selectedCategorie: string;





  ngOnInit(): void {

    this.currentUser = this.token.getUser();debugger
    this.id=this.currentUser.id;debugger
    this.getAllFavoris();
    

  }


  private getAllFavoris(){
    this.commentaireService.getAllFavoris().subscribe(
      (data: Cv[]) => {
        // Appliquer une condition pour filtrer uniquement les utilisateurs actifs
        for (const favori of data) {
          if (favori.user && favori.user.id) { 
          if (favori.user.id == this.id) {
            this.resultatfinal.push(favori);debugger
          }}

        }
        console.log("hhhhhhhhhhh",this.resultatfinal)

        
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs depuis le backend', error);
      }
    );
  }

  offreDetail(id: number){
    this.router.navigate(['/cv', id]);
  }

  searchRecettes() {
    if (this.selectedCategorie) {
      this.offreService.searchRecettesByCategorie(this.selectedCategorie).subscribe(results => {
        this.searchResults2 = results;
      });
    } else {
      this.searchResults = [];
    }
  }


 




 


}
