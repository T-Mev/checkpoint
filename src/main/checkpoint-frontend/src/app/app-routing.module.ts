import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'search', component: SearchComponent},
  {path: 'games', component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
