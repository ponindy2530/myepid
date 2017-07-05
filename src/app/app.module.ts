import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { PSharedModule } from './shared/p-shared.module';
import { DetailComponent } from './detail/detail.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { Home2Component } from './home2/home2.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { BannerComponent } from './banner/banner.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



const routes: Routes = [
  { path: '', redirectTo: '/home2', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'home2', component: Home2Component },
  // { path: 'home', component: PccHomeComponent },
  // { path: 'editor', component: EditorComponent },
  // { path: 'welcome', component: WelcomeComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'pccnbc', component: PccNbcComponent },
  // { path: 'pccarj', component: PccArjComponent },
  // { path: 'pcckm', component: PccKmComponent },
  // { path: 'reg', component: RegComponent },
  // { path: 'home2', component: Home2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    DetailComponent,
    ShowProfileComponent,
    Home2Component,
    GalleriaComponent,
    BannerComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    PSharedModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
