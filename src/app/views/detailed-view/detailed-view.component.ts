import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from 'src/app/interfaces/movie.interface';
import { TvShow } from 'src/app/interfaces/tvshow.interface';
import { Video, VideoResults } from 'src/app/interfaces/video.interface';
import { MediaItem } from 'src/app/interfaces/media-item.interface';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit{

  @Input() selectedId = 0;
  @Input() selectedTab = "";
  @Output() backButtonClick: EventEmitter<void> = new EventEmitter<void>();

  resultInfo!:MediaItem;
  resultVideo:SafeResourceUrl | null = null;

  constructor(private service:MovieService, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.getDetails();
    this.getVideo();
  }

  isMovie(item: MediaItem): item is Movie {
    return (item as Movie).title !== undefined;
  }
  
  isTvShow(item: MediaItem): item is TvShow {
    return (item as TvShow).original_name !== undefined;
  }

  getDetails(){
    if(this.selectedTab === 'tvShows'){
      this.getTvShowDetails();
    }else{
      this.getMovieDetails();
    }
  }

  getMovieDetails(){
    this.service.getMovieDetails(this.selectedId).subscribe((data:Movie)=>{
      this.resultInfo = data;
    });
  }

  getTvShowDetails(){
    this.service.getTvShowDetails(this.selectedId).subscribe((data:TvShow)=>{
      this.resultInfo = data;
    });
  }

  getVideo(){
    if(this.selectedTab === 'tvShows'){
      this.getTvShowTrailer();
    }else{
      this.getMovieTrailer();
    }
  }

  getTvShowTrailer(){
    this.service.getTvShowTrailers(this.selectedId).subscribe((data:VideoResults)=>{
      this.findTrailerVideo(data);
    })
  }

  getMovieTrailer(){
    this.service.getMovieTrailers(this.selectedId).subscribe((data:VideoResults)=>{
      this.findTrailerVideo(data);
    })
  }

  findTrailerVideo(data:VideoResults){
    if(data.results.length !== 0){
      let trailer = null;
      data.results.forEach((video:Video) => {
        if(video.type === "Trailer" && video.site === "YouTube"){
          trailer = video.key;
        }
      });
      if(trailer){
        this.resultVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + trailer)
      }
    }
  }

  goBack(){
    this.resultVideo = null;
    this.backButtonClick.emit();
  }

}
