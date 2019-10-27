import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenincdntsComponent } from './openincdnts.component';

describe('OpenincdntsComponent', () => {
  let component: OpenincdntsComponent;
  let fixture: ComponentFixture<OpenincdntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenincdntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenincdntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
