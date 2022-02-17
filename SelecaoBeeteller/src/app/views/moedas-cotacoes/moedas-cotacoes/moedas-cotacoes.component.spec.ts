import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasCotacoesComponent } from './moedas-cotacoes.component';

describe('MoedasCotacoesComponent', () => {
  let component: MoedasCotacoesComponent;
  let fixture: ComponentFixture<MoedasCotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasCotacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedasCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
