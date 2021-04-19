import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSideBarComponent } from './vertical-side-bar.component';

describe('VerticalSideBarComponent', () => {
  let component: VerticalSideBarComponent;
  let fixture: ComponentFixture<VerticalSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
