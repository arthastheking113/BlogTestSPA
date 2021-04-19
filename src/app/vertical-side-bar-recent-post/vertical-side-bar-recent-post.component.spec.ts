import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSideBarRecentPostComponent } from './vertical-side-bar-recent-post.component';

describe('VerticalSideBarRecentPostComponent', () => {
  let component: VerticalSideBarRecentPostComponent;
  let fixture: ComponentFixture<VerticalSideBarRecentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalSideBarRecentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSideBarRecentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
