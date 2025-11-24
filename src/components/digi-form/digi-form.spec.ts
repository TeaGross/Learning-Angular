import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiForm } from './digi-form';

describe('DigiForm', () => {
  let component: DigiForm;
  let fixture: ComponentFixture<DigiForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
