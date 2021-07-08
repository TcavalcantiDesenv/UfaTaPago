import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelamentoBoletoComponent } from './parcelamento-boleto.component';

describe('ParcelamentoBoletoComponent', () => {
  let component: ParcelamentoBoletoComponent;
  let fixture: ComponentFixture<ParcelamentoBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelamentoBoletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelamentoBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
