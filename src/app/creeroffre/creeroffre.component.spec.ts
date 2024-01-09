import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeroffreComponent } from './creeroffre.component';

describe('CreeroffreComponent', () => {
  let component: CreeroffreComponent;
  let fixture: ComponentFixture<CreeroffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeroffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
