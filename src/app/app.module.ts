import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OffreComponent } from './offre/offre.component';
import { ListoffrepostulerComponent } from './listoffrepostuler/listoffrepostuler.component';
import { PostulerComponent } from './postuler/postuler.component';
import { CreeroffreComponent } from './creeroffre/creeroffre.component';
import { AlertComponent } from './alert/alert.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { CvComponent } from './cv/cv.component';
import { CreercvComponent } from './creercv/creercv.component';
import { ImagerecetteComponent } from './imagerecette/imagerecette.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    UserListComponent,
    UpdateUserComponent,
    UserDetailComponent,
    OffreComponent,
    ListoffrepostulerComponent,
    PostulerComponent,
    CreeroffreComponent,
    AlertComponent,
    UploadFilesComponent,
    CvComponent,
    CreercvComponent,
    ImagerecetteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
