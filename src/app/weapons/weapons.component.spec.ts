import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsComponent } from './weapons.component';

describe('WeaponsComponent', () => {
  let component: WeaponsComponent;
  let fixture: ComponentFixture<WeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
