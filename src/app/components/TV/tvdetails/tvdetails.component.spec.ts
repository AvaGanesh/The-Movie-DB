import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVDetailsComponent } from './tvdetails.component';

describe('TVDetailsComponent', () => {
  let component: TVDetailsComponent;
  let fixture: ComponentFixture<TVDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
