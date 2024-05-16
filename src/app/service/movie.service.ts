import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieResults } from '../interfaces/movie.interface';
import { TvShow, TvShowResults } from '../interfaces/tvshow.interface';
import { VideoResults } from '../interfaces/video.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = environment.apiKey;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTopRatedMovies(){
    const url =  `${this.baseUrl}/movie/top_rated`;
    return this.http.get<MovieResults>(url, {params: { api_key:this.apiKey }});
  }

  getTopRatedTvShows(){
    const url =  `${this.baseUrl}/tv/top_rated`;
    return this.http.get<TvShowResults>(url, {params: { api_key:this.apiKey }});
  }

  searchMovies(query:string){
    const url =  `${this.baseUrl}/search/movie`;
    return this.http.get<MovieResults>(url, {params: { api_key:this.apiKey, query:query}})
  }

  searchTvShows(query:string){
    const url =  `${this.baseUrl}/search/tv`;
    return this.http.get<TvShowResults>(url, {params: { api_key:this.apiKey, query:query}})
  }

  getMovieDetails(id:number){
    const url =  `${this.baseUrl}/movie/${id}`;
    return this.http.get<Movie>(url, {params: { api_key:this.apiKey }});
  }

  getTvShowDetails(id:number){
    const url =  `${this.baseUrl}/tv/${id}`;
    return this.http.get<TvShow>(url, {params: { api_key:this.apiKey }});
  }

  getMovieTrailers(id:number){
    const url =  `${this.baseUrl}/movie/${id}/videos`;
    return this.http.get<VideoResults>(url, {params: { api_key:this.apiKey }});
  }

  getTvShowTrailers(id:number){
    const url =  `${this.baseUrl}/tv/${id}/videos`;
    return this.http.get<VideoResults>(url, {params: { api_key:this.apiKey }});
  }
}
