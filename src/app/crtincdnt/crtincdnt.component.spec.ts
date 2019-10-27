import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtincdntComponent } from './crtincdnt.component';

describe('CrtincdntComponent', () => {
  let component: CrtincdntComponent;
  let fixture: ComponentFixture<CrtincdntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtincdntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtincdntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
