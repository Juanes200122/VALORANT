import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WeaponsComponent } from '../weapons/weapons.component';
import { MapsComponent } from '../maps/maps.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:  [
      {
      path: 'weapons',
      component: WeaponsComponent,

    },
    {
      path: 'maps',
      component: MapsComponent,
    }
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
