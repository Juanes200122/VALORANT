# TS -- peticion mediante servicio para las API en Angualar
## CODIGO


## Parte que pondriamos dentro del archivo creado en la carpeta de servicio

        import { HttpClient } from '@angular/common/http';
        import { Injectable } from '@angular/core';
        import { Observable } from 'rxjs';

        @Injectable({
            providedIn: 'root'
            })
            export class Nombre {

            constructor(
                private _http:HttpClient
            ) { }

            public getNombre (): Observable<any>{
                return this._http.get('https://valorant-api.com/v1/weapons?language=es-ES');
            }
        }


## Parte del codigo que se pondria dentro del export del componente.ts

            data: any;

            constructor(private mapService: Nombre) { }

            ngOnInit(): void {
                this.getNombre();
            }

            getNombre(): void {
                this.mapService.getNombre().subscribe({
                    next: (data) => {
                        console.log(data);
                        this.data = data;
                    },
                    error: (error) => {
                        console.error('Error al obtener datos de las armas:', error);
                    }
                });
            }


## ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////