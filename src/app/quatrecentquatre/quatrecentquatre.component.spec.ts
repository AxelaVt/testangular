import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatrecentquatreComponent } from './quatrecentquatre.component';

describe('QuatrecentquatreComponent', () => {
  let component: QuatrecentquatreComponent;
  let fixture: ComponentFixture<QuatrecentquatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatrecentquatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatrecentquatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
