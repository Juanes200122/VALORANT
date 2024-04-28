import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WeaponsComponent } from '../weapons/weapons.component';
import { MapsComponent } from '../maps/maps.component';
import { AgentsComponent } from '../agents/agents.component';
import { InicioVistComponent } from '../inicio-vist/inicio-vist.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: InicioVistComponent,
      },
      {
        path: 'homepage',
        redirectTo: '',
      },
      {
        path: 'weapons',
        component: WeaponsComponent,
      },
      {
        path: 'maps',
        component: MapsComponent,
      },
      {
        path: 'agents',
        component: AgentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
