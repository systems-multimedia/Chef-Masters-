import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  {
    path: 'menu', component: NavBarComponent, children: [
      { path: 'home', component: HomeComponent},
      {path: 'about', component: InformationComponent}
    ]
  },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
