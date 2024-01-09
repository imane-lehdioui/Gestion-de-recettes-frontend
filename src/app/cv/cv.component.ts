import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../cv';
import { CvService } from '../_services/cv.service'
import { OffreService } from '../_services/offre.service';
import { Offre } from '../offre';
import { CommentaireService } from '../_services/commentaire.service';
import { Commentaire } from '../Commentaire';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  host : String = "http://localhost:8080"

  id: number
  offre: Offre
  cv: Cv;
  commentaire:Commentaire[]
  searchResults: Commentaire[];
  commentById:any;
  searchResults1: Commentaire[];
  donneesFiltrees:Commentaire[];
  resultatfinal: any[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  username?: string;
  private roles: string[] = [];
  user_id :any;
  offre_id:any;
  resultatfinalfavoris: any[] = [];
  test:BigInt;


  form: any = {

    contenu: null,
    idRecette :this.route.snapshot.params['id']
  
   
  };

  form2: any = {

    user_id: null,
    offre_id :null
  
   
  };

  


  constructor(private token: TokenStorageService,private tokenStorageService: TokenStorageService,private commentaireService :CommentaireService, private offerService: OffreService,private route: ActivatedRoute,private router: Router) { }
  currentUser: any;
  
  

    ngOnInit(): void {
      //================favoris====================

      this.currentUser = this.token.getUser();debugger
      this.form2.user_id= this.currentUser.id;debugger
      this.test= this.route.snapshot.params['id']
      this.form2.offre_id=this.test;debugger

      //this.offre_id = parseInt(this.route.snapshot.params['id'], 10);

      
      

      //====================================
      this.id = this.route.snapshot.params['id'];
  
      this.offre = new Offre();
      this.offerService.getOffreById(this.id).subscribe( data => {
        this.offre = data;
      });

      this.getAllCommentaire();
     // this.getAllCommentaire();debugger
      //Recuperer le nom de l'utilisateur
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
  
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        this.showUserBoard = this.roles.includes('ROLE_USER');
  
        this.username = user.username;
      }
      

     

      
    }

   //----------Afficher la liste des commentaires---------------------------

  private getAllCommentaire(){
    this.commentaireService.getAllCommentaire().subscribe(
      (data: Commentaire[]) => {
        // Appliquer une condition pour filtrer uniquement les utilisateurs actifs
        for (const comment of data) {
          if (comment.idRecette == this.id) {
            this.resultatfinal.push(comment);debugger
            console.log(comment.contenu);debugger
          }
        }
        
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs depuis le backend', error);
      }
    );
  }

  //------------add comment--------------------
  addComment(): void {
    const data = this.form;
    debugger
    this.commentaireService.createCommentire(data).subscribe({
      next: data => {
        console.log(data);debugger
      },
      error: err => {
       
      }
    });
    alert("Votre commentaire a été envoyer avec succès");
    location.reload();
  }
   //------------add favoris--------------------
   addFavoris(): void {

    this.resultatfinalfavoris.push(this.offre_id);debugger
    this.resultatfinalfavoris.push(this.user_id);debugger

    const data = this.form2;debugger

    this.commentaireService.addFavoris(data).subscribe({
      next: data => {
        console.log(data);debugger
      },
      error: err => {
       
      }
    });
    alert("Votre favori a été envoyer avec succès");
    location.reload();
  }
}






