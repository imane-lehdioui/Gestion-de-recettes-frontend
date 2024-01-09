import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileUploadService } from '../_services/file-upload.service';
import { Offre } from '../offre';
import { OffreService } from '../_services/offre.service';

@Component({
  selector: 'app-creercv',
  templateUrl: './creercv.component.html',
  styleUrls: ['./creercv.component.css']
})
export class CreercvComponent implements OnInit {

  form: any = {
    titre: null,
    description: null,
    ingredients: null,
    preparation: null,
    categorie: null
   
  };
//====image=====
  userFile : any;
  imgURL : any;
  public message1 : string;
  public imagePath : any;



  image:any = "assets/images/cvb.PNG";
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  constructor(private router: Router,private uploadService: FileUploadService,private offreService : OffreService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
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
  // ============================================================
  addData(){
    const formData = new FormData();debugger
    const recette = this.form;debugger
    formData.append('file',this.userFile);debugger
    formData.append('recette',JSON.stringify(recette));debugger
    
    this.offreService.createData(formData).subscribe({
      next: data => {
        console.log(data);
        console.log(formData);
      },
      error: err => {
       
      }
    });debugger
    this.router.navigate(['/offre']);


    // this.offreService.createOffre(formData).subscribe( data =>{

    //   this.router.navigate(['/offre']);


    // }
    //  );
    alert("La recette a été creer avec succès");


  }


}
