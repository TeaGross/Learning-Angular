import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPresentation } from './todo-presentation';

describe('TodoPresentation', () => {
  let component: TodoPresentation;
  let fixture: ComponentFixture<TodoPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoPresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
