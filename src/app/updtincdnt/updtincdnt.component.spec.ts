import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtincdntComponent } from './updtincdnt.component';

describe('UpdtincdntComponent', () => {
  let component: UpdtincdntComponent;
  let fixture: ComponentFixture<UpdtincdntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdtincdntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtincdntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
