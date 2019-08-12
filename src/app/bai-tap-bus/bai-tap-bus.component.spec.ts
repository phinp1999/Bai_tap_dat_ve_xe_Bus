import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapBusComponent } from './bai-tap-bus.component';

describe('BaiTapBusComponent', () => {
  let component: BaiTapBusComponent;
  let fixture: ComponentFixture<BaiTapBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
