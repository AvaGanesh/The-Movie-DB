import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTVComponent } from './popular-tv.component';

describe('PopularTVComponent', () => {
  let component: PopularTVComponent;
  let fixture: ComponentFixture<PopularTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
