import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/utilities/movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  flag:boolean = false;


  Movies :Movie[] = [
    {id: 1, name: "DDLJ", description : "", image:"https://assets.vogue.in/photos/5f8d7926077c3eea35ebdd20/master/pass/DDLJ.jpeg", flag:true },
    {id: 2, name: "RHTDM", description : "", image:"https://images.indianexpress.com/2021/10/canva-photo-editor-18.jpg" , flag:true},
    {id: 3, name: "ZNMD",  description : "", image:"https://images.hindustantimes.com/img/2021/05/24/1600x900/_4c7dd6ba-a6ea-11e9-bdb2-acd0277ecbef_1621843779595.jpg" , flag:true },
    {id: 4, name: "Morbius", description : "", image:"https://m.media-amazon.com/images/M/MV5BNzZhYThmOTAtMzJkNi00MjQ0LWE0ZWItYzRhZWU5Njc3ZmFkXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg" , flag:true },
    {id: 5, name: "The Batman", description : "", image:"https://imageio.forbes.com/specials-images/imageserve/622386616fe50ee041957a48/Robert-Pattinson-in--The-Batman-/0x0.jpg?fit=crop&format=jpg&crop=1919,1079,x0,y0,safe" , flag:true },
    {id: 6, name: "Suits", description : "", image:"https://www.hollywoodreporter.com/wp-content/uploads/2017/08/gettyimages-462761576_-_h_2017.jpg?w=681&h=383&crop=1" , flag:true }
  ];



  searchTerm!: string;
  Movies1: Movie[] = [];
  term!: string;
  allMovies!: Movie[];


  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.http.get<Movie[]>('./assets/data/countries.json')
      .subscribe((data: Movie[]) => {
        this.Movies1 = data;
        this.allMovies = this.Movies1;
      });
  }

  search(value: string): void {
    if(this.Movies === null){

    }else{
      this.Movies1 = this.allMovies.filter((val) => val.name.toLowerCase().includes(value));
    }

  }

  onClick(){
    this.flag = !this.flag;
  }

  goBack(){
    this.location.back();
  }

  goTo(){

  }
}

