import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTVComponent } from './top-rated-tv.component';

describe('TopRatedTVComponent', () => {
  let component: TopRatedTVComponent;
  let fixture: ComponentFixture<TopRatedTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
