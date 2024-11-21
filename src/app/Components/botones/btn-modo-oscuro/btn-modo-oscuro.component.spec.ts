import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnModoOscuroComponent } from './btn-modo-oscuro.component';

describe('BtnModoOscuroComponent', () => {
  let component: BtnModoOscuroComponent;
  let fixture: ComponentFixture<BtnModoOscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnModoOscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnModoOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
