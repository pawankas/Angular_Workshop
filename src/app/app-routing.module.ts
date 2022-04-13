import { UserComponent } from './MyComponents/user/user.component';
import { MovieDetailComponent } from './MyComponents/movie-detail/movie-detail.component';
import { DetailsComponent } from './MyComponents/details/details.component';
import { FavPhotosComponent } from './MyComponents/fav-photos/fav-photos.component';

import { ListComponent } from './MyComponents/list/list.component';
import { ChoresListComponent } from './MyComponents/chores-list/chores-list.component';


import { MoviesComponent } from './MyComponents/movies/movies.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'favPhotos', component: FavPhotosComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'chores', component: ChoresListComponent },
  { path: 'books', component: ListComponent},
  { path: 'books/:id', component: DetailsComponent},
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: 'users', component: UserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
