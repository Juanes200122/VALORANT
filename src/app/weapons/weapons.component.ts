import { Component, inject } from '@angular/core';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss'
})
export class WeaponsComponent {

  _agent=  inject(AgentsService)

  data: any= '';

  constructor(
   
  ){
    this.getItems();
  }

  getItems(){
    this._agent.getItems().subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      }
    })
  }
}

