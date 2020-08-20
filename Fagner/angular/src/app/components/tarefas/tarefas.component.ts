import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TODO } from 'src/models/todo.interface'
import { AppService } from 'src/app/app-service.service'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  public tarefa: TODO = {
    //id: 1,
    todo: "",
    done: false
  }
  public Tarefas: TODO[] = []

  public mode:string = 'list'
  //public todos: Todo[] = []; //array vazio
  public title: string ='Minhas tarefas'
  public form: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient, private appService:AppService) { 
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    })
    this.refresh()   //Dentro do construtor o método vai ser iniciado toda vez que a plicação inicia
   }

  ngOnInit(): void {
    this.refresh()
  }

  
  add() {
    const title = this.form.controls['title'].value
    this.tarefa.todo = title
    this.tarefa.done = false
    this.appService.create(this.tarefa).subscribe(()=>{this.refresh()})
    this.form.reset();
    //this.refresh()
  }

  markAsDone(tarefa: TODO) {
    tarefa.done = true
    return this.http.put<TODO>(`${this.appService.baseUrl}/${tarefa.id}`, tarefa).
    subscribe(()=>{this.refresh()})
    this.refresh()
  }

  markAsUndone(tarefa: TODO){
    tarefa.done = false
    return this.http.put<TODO>(`${this.appService.baseUrl}/${tarefa.id}`, tarefa).
    subscribe(()=>{this.refresh()})
    this.refresh()
  }

  remove(tarefa:TODO) {
    this.appService.delete(tarefa).subscribe(()=>{this.refresh()})
    //this.refresh()
  }

  refresh() {
    this.appService.read().subscribe(Tarefas => {
      this.Tarefas = Tarefas
      })
    this.mode = 'list'
   }

  changeMode (mode:string) {
    this.mode = mode
  }


}




  /*
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1)
    this.loadRead()
    }
  */


  /*
  const data = localStorage.getItem('todos')
  if (data) {
    this.todos = JSON.parse(data)
  }
  else {
    this.todos = []
  }
  */

  /*
  save() {
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
    this.mode = 'list'
  }
  */

//No typeScript com this. tenho acesso a todos os métodos e atributos dentro da classe
//O tipo any aceita qualquer tipo de variável (number, string, etc)
