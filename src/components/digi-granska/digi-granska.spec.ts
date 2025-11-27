import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiGranska } from './digi-granska';

describe('DigiGranska', () => {
  let component: DigiGranska;
  let fixture: ComponentFixture<DigiGranska>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiGranska]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiGranska);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
