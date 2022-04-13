import { Movie } from './../../utilities/movie';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id : any;
  movie : Movie[] | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id= p['id'];
      console.log("param "+p['id']);
    })
    console.log("id "+this.id);
  }

}
