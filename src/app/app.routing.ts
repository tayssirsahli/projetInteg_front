import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedecinUserComponent } from './medecin-user/medecin-user.component';
import { PaymentComponent } from './payment/payment.component';
import { FicheComponent } from './fiche/fiche.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AgenceUserComponent } from './agence-user/agence-user.component';
import { LaveurUsersComponent } from './laveur-users/laveur-users.component';
const routes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medecin-user', component: MedecinUserComponent },
  {path: 'laveur-user', component:LaveurUsersComponent},
  {path: 'agence-user', component:AgenceUserComponent},
  { path: 'payment', component: PaymentComponent },
  {path:'fiche', component: FicheComponent},
  {path:'home', component: HomeComponent},
  {path:'header', component: HeaderComponent},
  {path:'user-profil', component: UserProfileComponent},
  {path:'profil-user', component: ProfilUserComponent},






  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '',
    //redirectTo: 'dashboard',
    //pathMatch: 'full',},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
