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
    uuidWeapon: string | null = null;
    showSkins: boolean = false;    
    clickedClass: string | null = null; // Variable para almacenar la clase capturada al hacer clic


    constructor(private weaponsService: WeaponsServide) { }
    
    handleBlockImageClick(event: MouseEvent, extractedClass: string) {
        this.clickedClass = extractedClass; // Almacena la clase capturada al hacer clic
        console.log(extractedClass);        
    }
    
    ngOnInit(): void {
        this.getWeapons();
    }

    toggleSkins() {
        this.showSkins = !this.showSkins;
    }
    toggleClose() {
        this.showSkins = !this.showSkins;
    }

    getWeapons(): void {
        this.weaponsService.getWeapons().subscribe({
            next: (dataWeapons) => {
                console.log(dataWeapons);
                this.dataWeapons = dataWeapons;
            },
            error: (error) => {
                console.error('Error al obtener datos de las armas:', error);
            }
        });
    }

    // En tu componente TypeScript
extractIdFromUrl(url: string): string {
    if (!url) return ''; // Maneja casos donde la URL está vacía o es null/undefined

    // Encuentra el último segmento del URL que contiene el ID
    const segments = url.split('/');
    const id = segments[segments.length - 2]; // Obtiene el penúltimo segmento del URL

    return id ? `${id}` : ''; // Retorna una clase como 'id-89be9866-4807-6235-2a95-499cd23828df'
}


    filteredWeapons(category: string): any[] {
        if (!this.dataWeapons || !this.dataWeapons.data) {
            return [];
        }
        return this.dataWeapons.data.filter((weapon: any) => {
            return weapon.category === `EEquippableCategory::${category}`;
        });
    }

    getSelectedWeapon(): any {
        if (!this.dataWeapons || !this.dataWeapons.data || !this.uuidWeapon) {
            return null;
        }
        return this.dataWeapons.data.find((weapon: any) => {
            return weapon.uuid === this.uuidWeapon;
        });
    }

    weaponUUID(uuid: string): void {
        this.uuidWeapon = uuid;
        console.log('Weapon selected:', uuid);
    }
}


