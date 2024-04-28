import { Component, inject } from '@angular/core';
import { AgentsService } from '../services/agents.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agents',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './agents.component.html',
    styleUrl: './agents.component.scss'
})
export class AgentsComponent  {
    data: any; // Tipo adecuado para tus datos de agentes

    //almacenar el uuid seleccionado
    uuidSeleccionado: string | null = null;

    constructor(private agentsService: AgentsService) {}

    ngOnInit() {
        this.getItems(); //función al inicializar el componente
    }

    getItems() {
        this.agentsService.getItems().subscribe({
            next: (data) => {
                console.log(data);
                this.data = data; // Asigna los datos obtenidos del servicio
            },
            error: (error) => {
                console.error('Error al obtener datos de agentes:', error);
            }
        });
    }

    // Función para guardar el uuid seleccionado cuando se hace clic en una tarjeta
    guardarUuid(uuid: string) {
        this.uuidSeleccionado = uuid;
        console.log('UUID seleccionado:', uuid);
    }



    obtenerUUID(): any | null {
        if (!this.uuidSeleccionado || !this.data || !this.data.data) {
            return null;
        }
        const agenteSeleccionado = this.data.data.find((agent: any) => agent.uuid === this.uuidSeleccionado);

        return agenteSeleccionado || null;
    }


    
}


