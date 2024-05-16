import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedViewComponent } from './detailed-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailedViewComponent', () => {
  let component: DetailedViewComponent;
  let fixture: ComponentFixture<DetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedViewComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
