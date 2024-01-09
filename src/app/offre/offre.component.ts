import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { OffreService } from '../_services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  host : String = "http://localhost:8080"


  offre: Offre[];
  selectedCategorie: string;
  searchResults: Offre[];

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

}
