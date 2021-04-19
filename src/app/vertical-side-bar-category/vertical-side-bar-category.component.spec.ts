import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSideBarCategoryComponent } from './vertical-side-bar-category.component';

describe('VerticalSideBarCategoryComponent', () => {
  let component: VerticalSideBarCategoryComponent;
  let fixture: ComponentFixture<VerticalSideBarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalSideBarCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSideBarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
