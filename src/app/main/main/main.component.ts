import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from "@angular/router";
import { AgentsComponent } from '../../agents/agents.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AgentsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
