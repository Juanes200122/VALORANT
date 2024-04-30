import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeaponsServide } from '../services/weapons.service';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss'
})
export class WeaponsComponent {

  dataWeapons: any;

  constructor(private mapService: WeaponsServide) { }

  ngOnInit(): void {
      this.getWeapons();
  }

  getWeapons(): void {
      this.mapService.getWeapons().subscribe({
          next: (dataWeapons) => {
              console.log(dataWeapons);
              this.dataWeapons = dataWeapons;
          },
          error: (error) => {
              console.error('Error al obtener datos de las armas:', error);
          }
      });
  }
}

