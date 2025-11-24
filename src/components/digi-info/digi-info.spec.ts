import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiInfo } from './digi-info';

describe('DigiInfo', () => {
  let component: DigiInfo;
  let fixture: ComponentFixture<DigiInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
