import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAppLazyLoadingComponent } from './micro-app-lazy-loading.component';

describe('MicroAppLazyLoadingComponent', () => {
  let component: MicroAppLazyLoadingComponent;
  let fixture: ComponentFixture<MicroAppLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroAppLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAppLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
