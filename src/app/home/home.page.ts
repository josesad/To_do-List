import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';
import { CommonModule } from '@angular/common';
import { TarefaNovaPage } from '../tarefa-nova/tarefa-nova.page';
import { FormsModule } from '@angular/forms';
import { TarefaAtualizaPage } from '../tarefa-atualiza/tarefa-atualiza.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TarefaNovaPage, TarefaAtualizaPage],
})
export class HomePage {
  public hoje: number = Date.now();
  public tarefasLista: Array<Tarefa> = [{
    id: '001',
    nome: 'correr',
    data: '2023-04-12',
    prioridade: 'alto',
    categoria: 'pessoal'
  }] 
  constructor(private modalCtrl: ModalController, private tarefaService: TarefaService) { }

  ngOnInit() {
    this.listar();
  }

  async adicionar() {
    const modal = await this.modalCtrl.create({
      component: TarefaNovaPage
    });

    modal.onDidDismiss().then( novaTarefa => {
      this.listar();
    });

    return await modal.present();
  }

  public async listar() {
    this.tarefasLista = await this.tarefaService.carregar();
    
    console.log(this.tarefasLista);

  }

  public deletar(id: string) {
    this.tarefaService.deletar(id);
    this.listar();
  }

  public async atualizar(tarefaSelecionada: Tarefa) {
    const modal = await this.modalCtrl.create({
      component: TarefaAtualizaPage,
      componentProps: {
        minhaTarefa: tarefaSelecionada
      }
    })

    modal.onDidDismiss().then(()=>{
      this.listar();
    });

    return await modal.present();
  }

  public prioridadeCor(prioridade: string) {
    const cor: string =prioridade === 'alto' ? 'danger' : (prioridade === 'baixo' ? 'success' : 'warning');
    
    console.log(cor);

    return cor;
  }

}
