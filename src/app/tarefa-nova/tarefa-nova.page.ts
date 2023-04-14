import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './tarefa-nova.page.html',
  styleUrls: ['./tarefa-nova.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaNovaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
