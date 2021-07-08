import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoConsignadoComponent } from './emprestimo-consignado.component';

describe('EmprestimoConsignadoComponent', () => {
  let component: EmprestimoConsignadoComponent;
  let fixture: ComponentFixture<EmprestimoConsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoConsignadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimoConsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
