import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewincdntdtlComponent } from './viewincdntdtl.component';

describe('ViewincdntdtlComponent', () => {
  let component: ViewincdntdtlComponent;
  let fixture: ComponentFixture<ViewincdntdtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewincdntdtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewincdntdtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
