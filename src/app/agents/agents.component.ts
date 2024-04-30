import { Component, ElementRef, ViewChild } from '@angular/core';
import { AgentsService } from '../services/agents.service';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-agents',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './agents.component.html',
    styleUrl: './agents.component.scss',
  
})
export class AgentsComponent {
    data: any; // Tipo adecuado para tus datos de agentes
    uuidSeleccionado: string | null = null;

    @ViewChild('contenedor') contenedorRef!: ElementRef<HTMLDivElement>;

    constructor(private agentsService: AgentsService) {}

    ngOnInit(): void {
        this.getItems(); // función al inicializar el componente

        // Agregar el listener de scroll al contenedor
        const contenedor = document.getElementById('contenedor');
        if (contenedor) {
            contenedor.addEventListener('wheel', (e) => {
                e.preventDefault();
                if (contenedor) {
                    contenedor.scrollLeft += e.deltaY;
                }
            });
        }
    }

    getItems(): void {
        this.agentsService.getItems().subscribe({
            next: (data) => {
                //console.log(data);
                this.data = data; // Asigna los datos obtenidos del servicio
            },
            error: (error) => {
                console.error('Error al obtener datos de agentes:', error);
            }
        });
    }

    guardarUuid(uuid: string): void {
        this.uuidSeleccionado = uuid;
        //console.log('UUID seleccionado:', uuid);
    }

    obtenerUUID(): any | null {
        if (!this.uuidSeleccionado || !this.data || !this.data.data) {
            return null;
        }
        const agenteSeleccionado = this.data.data.find((agent: any) => agent.uuid === this.uuidSeleccionado);
        return agenteSeleccionado || null;
    }

    //Scroll para las cards de los personajes de VALORANT
    AddScroll(): void {
        if (this.contenedorRef) {
            this.contenedorRef.nativeElement.addEventListener('wheel', this.scrollHandler, { passive: false });
        }
    }

    DropScroll(): void {
        if (this.contenedorRef) {
            this.contenedorRef.nativeElement.removeEventListener('wheel', this.scrollHandler);
        }
    }

    private scrollHandler = (e: WheelEvent) => {
        e.preventDefault();
        if (this.contenedorRef) {
            this.contenedorRef.nativeElement.scrollLeft += e.deltaY;
        }
    };
}


