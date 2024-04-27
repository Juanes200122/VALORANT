import { Component, inject } from '@angular/core';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {

  _agent=  inject(AgentsService)

  data: any= '';

  constructor(
   
  ){
    // this.getItems();
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
