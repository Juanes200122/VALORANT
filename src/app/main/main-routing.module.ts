import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WeaponsComponent } from '../weapons/weapons.component';
import { AgentsComponent } from '../agents/agents.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { MapsComponent } from '../maps/maps.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomepageComponent,
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
export class MainRoutingModule { }
