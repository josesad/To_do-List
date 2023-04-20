import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Tarefa } from '../models/tarefa.model';


@Injectable({
	providedIn: 'root'
})
export class TarefaService {

	constructor(private storage: Storage) {
		this.storage.create();
	}

	public async adicionar(novaTarefa: Tarefa) {
		await this.storage.set(novaTarefa.id, novaTarefa)
	}

	public async deletar(id: string) {
		await this.storage.remove(id)
	}

	public async editar(tarefa: Tarefa) {
		await this.storage.set(tarefa.id, tarefa)
	}

	public async buscar(id: string) {
		await this.storage.get(id);
	}

	public async carregar(): Promise<Tarefa[]> {
		let tarefas: Array<Tarefa> = [];
		await this.storage.forEach((tarefa, id, indice) => {
			tarefas.push({
				...tarefa
			})
		})
		return tarefas
	}
}
