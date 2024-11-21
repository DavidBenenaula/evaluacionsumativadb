import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostrativoComponent } from './demostrativo.component';

describe('DemostrativoComponent', () => {
  let component: DemostrativoComponent;
  let fixture: ComponentFixture<DemostrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemostrativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemostrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
