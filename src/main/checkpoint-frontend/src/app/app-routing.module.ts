import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { HomeComponent } from './components/home/home.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'upcoming', component: UpcomingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
