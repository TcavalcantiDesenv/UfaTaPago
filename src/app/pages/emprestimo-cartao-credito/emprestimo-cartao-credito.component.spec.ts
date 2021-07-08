import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoCartaoCreditoComponent } from './emprestimo-cartao-credito.component';

describe('EmprestimoCartaoCreditoComponent', () => {
  let component: EmprestimoCartaoCreditoComponent;
  let fixture: ComponentFixture<EmprestimoCartaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoCartaoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimoCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
