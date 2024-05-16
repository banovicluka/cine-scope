import { Component, OnInit} from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { MovieResults } from 'src/app/interfaces/movie.interface';
import { TvShowResults } from 'src/app/interfaces/tvshow.interface';
import { MediaItem } from 'src/app/interfaces/media-item.interface';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit{


  results: MediaItem[]=[];
  selectedTab = "tvShows";
  searchInput = "";
  selectedId = 0;
  view ="start";


  constructor(private service:MovieService){}

  ngOnInit(){
   this.getTopRated();
  }

  getTopRated(){
    if(this.selectedTab === "tvShows"){
      this.getTopShows();
    }else 
      this.getTopMovies();
  }

  getTopMovies(){
    this.service.getTopRatedMovies().subscribe( (moviesData:MovieResults) => {
      this.results = moviesData.results.slice(0,10);
    })
  }

  getTopShows(){
    this.service.getTopRatedTvShows().subscribe( (moviesData:TvShowResults) => {
      this.results = moviesData.results.slice(0,10);
    })
  }

  selectTab(tab: string): void{
    this.selectedTab = tab;
    if(this.selectedTab === "tvShows") 
      this.onSearchInput();
    else
      this.onSearchInput();
  }

  onSearchInputChanged(searchInput: string){
    this.searchInput = searchInput;
    this.onSearchInput();
  }
  onSearchInput(){
    if(this.searchInput.length >= 3){
      this.search(this.searchInput);
    }else{
      this.getTopRated();
    }
  }

  search(query:string){
    if(this.selectedTab === 'tvShows'){
      return this.service.searchTvShows(query).subscribe((data:TvShowResults) => {
        this.results = data.results;
      });
    }
    else{
      return this.service.searchMovies(query).subscribe((data:MovieResults) => {
        this.results = data.results;
      });
    }
  }

  navigateToDetails(id:number){
    this.selectedId = id;
    this.view="details";
  }

  handleBackAction(){
    this.view="start";
  }
}
