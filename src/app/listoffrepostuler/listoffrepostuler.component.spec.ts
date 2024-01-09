import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffrepostulerComponent } from './listoffrepostuler.component';

describe('ListoffrepostulerComponent', () => {
  let component: ListoffrepostulerComponent;
  let fixture: ComponentFixture<ListoffrepostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffrepostulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffrepostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
