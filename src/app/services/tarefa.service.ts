import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Tarefa } from '../models/tarefa.model';


@Injectable({
	providedIn: 'root'
})
export class TarefaService {

	constructor(private storage: Storage) {
	}

	public adicionar(novaTarefa: Tarefa) {
		this.storage.set(novaTarefa.id, novaTarefa)
	}

	public deletar(id: string) {
		this.storage.remove(id)
	}

	public editar(tarefa: Tarefa) {
		this.storage.set(tarefa.id, tarefa)
	}

	public carregar(): Array<Tarefa> {
		let tarefas: Array<Tarefa> = [];
		this.storage.forEach((tarefa, id, indice) => {
			tarefas.push({
				...tarefa
			})
		})
		return tarefas
	}
}
