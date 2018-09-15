import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorIDComponent } from './author-id.component';

describe('AuthorIDComponent', () => {
  let component: AuthorIDComponent;
  let fixture: ComponentFixture<AuthorIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
