import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPostComponent } from './list-of-post.component';

describe('ListOfPostComponent', () => {
  let component: ListOfPostComponent;
  let fixture: ComponentFixture<ListOfPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
