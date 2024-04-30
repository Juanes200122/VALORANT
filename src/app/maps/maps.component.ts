import { Component } from '@angular/core';
import { MapService } from '../services/maps.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-maps',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maps.component.html',
    styleUrl: './maps.component.scss'
})
export class MapsComponent {
    data: any;

    constructor(private mapService: MapService) { }

    ngOnInit(): void {
        this.getMaps();
    }

    getMaps(): void {
        this.mapService.getMaps().subscribe({
            next: (data) => {
                console.log(data);
                this.data = data;
            },
            error: (error) => {
                console.error('Error al obtener datos de agentes:', error);
            }
        });
    }
}
