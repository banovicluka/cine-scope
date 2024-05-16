import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {  debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnDestroy{

  @ViewChild('searchBox') searchBoxRef!: ElementRef;
  @Output() searchInputChanged: EventEmitter<string> = new EventEmitter<string>();  
  @Input() searchInput = "";

  searchSubscription!: Subscription;

  ngAfterViewInit(){
    this.searchSubscription = fromEvent<Event>(this.searchBoxRef.nativeElement, 'input')
      .pipe(
        debounceTime(1000),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged(), 
      )
      .subscribe(() => {
        this.searchInputChanged.emit(this.searchInput);
      });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}

