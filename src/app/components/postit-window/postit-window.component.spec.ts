import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostitWindowComponent } from './postit-window.component';

describe('PostitWindowComponent', () => {
  let component: PostitWindowComponent;
  let fixture: ComponentFixture<PostitWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostitWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostitWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
