import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home',component: HomeComponent},
  { path: 'song/:type/:id',component: SongsComponent},
  {path: '**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
