import { Component, Input } from '@angular/core';
import { MediaItem } from 'src/app/interfaces/media-item.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { TvShow } from 'src/app/interfaces/tvshow.interface';

@Component({
  selector: 'app-detail-overview',
  templateUrl: './detail-overview.component.html',
  styleUrls: ['./detail-overview.component.css']
})
export class DetailOverviewComponent {

  @Input() result!:MediaItem;

  isMovie(item: MediaItem): item is Movie {
    return (item as Movie).title !== undefined;
  }
  
  isTvShow(item: MediaItem): item is TvShow {
    return (item as TvShow).original_name !== undefined;
  }

}
