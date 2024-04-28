import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVistComponent } from './inicio-vist.component';

describe('InicioVistComponent', () => {
  let component: InicioVistComponent;
  let fixture: ComponentFixture<InicioVistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioVistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
