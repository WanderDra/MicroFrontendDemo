import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAppBroadcastComponent } from './micro-app-broadcast.component';

describe('MicroAppBroadcastComponent', () => {
  let component: MicroAppBroadcastComponent;
  let fixture: ComponentFixture<MicroAppBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroAppBroadcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAppBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
