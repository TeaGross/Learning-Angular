import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Granska } from './granska';

describe('Granska', () => {
  let component: Granska;
  let fixture: ComponentFixture<Granska>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Granska]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Granska);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
