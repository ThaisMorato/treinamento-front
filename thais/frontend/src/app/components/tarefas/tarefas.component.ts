import { Component, OnInit } from '@angular/core';
import { TarefaService } from './tarefa.service';
import { Todo } from 'src/models/todo.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  public title: String = 'Minhas Tarefas';
  public todos: Todo[] = [];
  public form: FormGroup;
  public mode: string = 'list';

  todo: Todo = {
    title: '',
    done: false
  }

  constructor(private fb: FormBuilder, private tarefaService: TarefaService) {
    this.form = this.fb.group({
      title: ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void{
    this.refresh();
  }

  add(){
    this.todo.title = this.form.controls.title.value;
    this.tarefaService.adicionarTarefa(this.todo).subscribe(()=>{
      this.refresh();
      this.clear();
      this.mode = 'list';
    });
  } 

  clear(){
    this.form.reset();
  }

  remove(id: number){
    this.tarefaService.deletarTarefa(id).subscribe(()=>{});
    this.refresh();
  }
  

  mark(todo: Todo){
    todo.done = !todo.done;
    console.log("agora ela esta" + todo.done);
    this.tarefaService.atualizarTarefa(todo).subscribe(()=>{});
    this.refresh();
  }

  refresh(){
    this.tarefaService.buscarTarefas().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeMode(mode: string){
    this.mode = mode;
  }

}
