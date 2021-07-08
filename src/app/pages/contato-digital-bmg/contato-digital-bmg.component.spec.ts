import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDigitalBmgComponent } from './contato-digital-bmg.component';

describe('ContatoDigitalBmgComponent', () => {
  let component: ContatoDigitalBmgComponent;
  let fixture: ComponentFixture<ContatoDigitalBmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoDigitalBmgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDigitalBmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
