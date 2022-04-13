import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DetailsComponent } from './MyComponents/details/details.component';
import { ListComponent } from './MyComponents/list/list.component';

import { ChoresListComponent } from './MyComponents/chores-list/chores-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesComponent } from './MyComponents/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MovieDetailComponent } from './MyComponents/movie-detail/movie-detail.component';
import { UserComponent } from './MyComponents/user/user.component';
// import { ValidationService } from './services/validation-service.service';





@NgModule({
  declarations: [
    AppComponent,

    MoviesComponent,
    ChoresListComponent,

    SearchFilterPipe,
     ListComponent,
     DetailsComponent,
     MovieDetailComponent,
     UserComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent],
  // providers: [ValidationService],
})
export class AppModule { }
