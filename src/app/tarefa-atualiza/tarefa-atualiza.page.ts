import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tarefa-atualiza',
  templateUrl: './tarefa-atualiza.page.html',
  styleUrls: ['./tarefa-atualiza.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaAtualizaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
