import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeViewComponent } from './home-view.component';
import { MovieService } from 'src/app/service/movie.service';
import { of } from 'rxjs';
import { ComponentsModule } from 'src/app/components/components.module';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewComponent ],
      imports: [ HttpClientTestingModule, ComponentsModule],
      providers: [ MovieService ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);

    spyOn(movieService, 'getTopRatedMovies').and.returnValue(of({ results: [] }));
    spyOn(movieService, 'getTopRatedTvShows').and.returnValue(of({ results: [] }));
    spyOn(movieService, 'searchMovies').and.returnValue(of({ results: [] }));
    spyOn(movieService, 'searchTvShows').and.returnValue(of({ results: [] }));


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get top rated movies on init', () => {
    component.selectedTab = 'movies';
    component.ngOnInit();
    expect(movieService.getTopRatedMovies).toHaveBeenCalled();
  });

  it('should get top rated TV shows on init', () => {
    component.selectedTab = 'tvShows';
    component.ngOnInit();
    expect(movieService.getTopRatedTvShows).toHaveBeenCalled();
  });

  it('should search movies when input has more than 3 characters', () => {
    component.selectedTab = 'movies';
    component.onSearchInputChanged('test');
    expect(movieService.searchMovies).toHaveBeenCalledWith('test');
  });

  it('should search TV shows when input has more than 3 characters', () => {
    component.selectedTab = 'tvShows';
    component.onSearchInputChanged('test');
    expect(movieService.searchTvShows).toHaveBeenCalledWith('test');
  });

  it('should get top rated when input has less than 3 characters', () => {
    component.selectedTab = 'movies';
    component.onSearchInputChanged('te');
    expect(movieService.getTopRatedMovies).toHaveBeenCalled();
  });
});
