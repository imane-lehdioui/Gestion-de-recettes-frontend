import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OffreComponent } from './offre/offre.component';
import {ListoffrepostulerComponent} from './listoffrepostuler/listoffrepostuler.component';
import { CreeroffreComponent } from './creeroffre/creeroffre.component';
import { AlertComponent } from './alert/alert.component';
import {UploadFilesComponent} from './upload-files/upload-files.component';
import { CvComponent } from './cv/cv.component';
import { CreercvComponent } from './creercv/creercv.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ImagerecetteComponent } from './imagerecette/imagerecette.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'userlist', component:UserListComponent },
  { path: 'update-user/:id', component : UpdateUserComponent },
  {path:  'user-detail/:id', component :UserDetailComponent},
  {path: "cv/:id" , component:CvComponent},
  { path: 'imagerecette', component:ImagerecetteComponent },


  {path:   "offre" , component  : OffreComponent},
  {path: "Listoffrepostuler", component : ListoffrepostulerComponent},
  {path: "creeroffre", component: CreeroffreComponent},
  {path: "alert", component:AlertComponent},
  {path: "upload-files" , component:UploadFilesComponent},
  {path: "cv" , component:CvComponent},
  {path: "creercv" , component:CreercvComponent},
  {path: 'postuler/:id' , component:PostulerComponent},
  {
    path: "postuler/:id",
    component: PostulerComponent,
    resolve: {
      postuler: PostulerComponent,
    },
  },
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
