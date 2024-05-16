import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce input changes', (done) => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const testValue = 'debounced';

    component.searchInputChanged.subscribe((value: string) => {
      expect(value).toBe(testValue);
      done();
    });

    input.value = testValue;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  });
});
