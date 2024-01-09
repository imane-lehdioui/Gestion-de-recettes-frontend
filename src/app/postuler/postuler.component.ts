import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, mergeMap, of } from 'rxjs';
import { FileUploadService } from '../_services/file-upload.service';
import { OffreService } from '../_services/offre.service';
import { Offre } from '../offre';





@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  //offre: Offre;
  updatedOffre: Offre = new Offre();

  id: number;
  offre: Offre = new Offre();

  //====image=====
  userFile : any;
  imgURL : any;
  public message1 : string;
  public imagePath : any;



  form: any = {
    titre: null,
    description: null,
    ingredients: null,
    preparation: null,
    categorie: null
   
  };

  image:any = "assets/images/cvb.PNG";
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  constructor(private route: ActivatedRoute,private router: Router,private uploadService: FileUploadService,private offreService : OffreService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }


  

  goCv(){
    this.router.navigate(['/cv']);
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }


  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = file.name + ": Successful!";
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          let msg = file.name + ": Failed!";

          if (err.error && err.error.message) {
            msg += " " + err.error.message;
          }

          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        }
      });
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  // modifier recette

 
  updateRecette(){
    this.offreService.updateOffre(this.id, this.updatedOffre).subscribe( 
      data =>{
      // this.goToUserList();
    }
    );
  }

 

  creerOffre1(): void {
    const data = this.form;
    debugger
    this.offreService.createOffre(data).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
       
      }
    });
    this.router.navigate(['/offre']);
    alert("La recette a été creer avec succès");
  }

 

  creerOffre(): void {
    const data = this.form;
    debugger
    this.offreService.createOffre(data).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
       
      }
    });
    this.router.navigate(['/offre']);
    alert("La recette a été creer avec succès");
  }

  resolve( route: ActivatedRouteSnapshot): Observable<Offre> | Observable<never> {
		const id = route.params["id"];

		if (id) {
			return this.offreService.find(id).pipe(
				mergeMap((notaire: HttpResponse<Offre>) => {
					if (notaire != undefined && notaire.body) {
						return of(notaire.body);
					} else {
						this.router.navigate(["404"]);
						return EMPTY;
					}
				})
			);
		}
		return of(new Offre());
	}

  updateOffre() {debugger

    const id = this.route.snapshot.params["id"];debugger
    const data = this.form;

    //const id1 = route.params["id"];
    this.offreService.updateOffre(id, data).subscribe( 
      data =>{
      // this.goToUserList();
    }
    );debugger
    alert("La recette a été modifier avec succès");
    this.router.navigate(['/Listoffrepostuler']);

  }

   // Upload files
	// ============================================================
	onSelectFile(event: any) {

		if (event.target.files.length > 0) {
      const file =event.target.files[0];
      this.userFile = file;
      //this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/) == null){
        this.message1 = "Only image are supported .";
        return;
      }

      var reader =new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) =>{
        this.imgURL = reader.result;
      }
		}
	}

  


 

}
