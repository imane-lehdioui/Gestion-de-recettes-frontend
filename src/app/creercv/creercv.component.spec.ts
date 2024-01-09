import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercvComponent } from './creercv.component';

describe('CreercvComponent', () => {
  let component: CreercvComponent;
  let fixture: ComponentFixture<CreercvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreercvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
