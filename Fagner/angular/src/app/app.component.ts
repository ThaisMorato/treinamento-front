import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core'; 
import { Todo } from 'src/models/todo.model';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TODO } from 'src/models/todo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tarefa: TODO = {
    //id: 1,
    todo: "",
    done: false
  }
  public Tarefas: TODO[] = []

  public mode:string = 'list'
  public todos: Todo[] = []; //array vazio
  public title: string ='Minhas tarefas'
  public form: FormGroup
  public baseUrl = "http://localhost:3001/tarefas"

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    })
    this.loadRead()   //Dentro do construtor o método vai ser iniciado toda vez que a plicação inicia
  }

  create (teste: TODO): Observable<TODO> {
    return this.http.post<TODO>(this.baseUrl, teste)
  }

  read (): Observable<TODO[]> {
    return this.http.get<TODO[]>(this.baseUrl)
  }

  markAsDone(tarefa: TODO) {
    tarefa.done = true
    return this.http.put<TODO>(`${this.baseUrl}/${tarefa.id}`, tarefa).subscribe()
    this.loadRead()
  }

  markAsUndone(tarefa: TODO){
    tarefa.done = false
    return this.http.put<TODO>(`${this.baseUrl}/${tarefa.id}`, tarefa).subscribe()
    this.loadRead()
  }

  remove(tarefa:TODO) {
    this.delete(tarefa).subscribe()
    this.loadRead()
  }
  delete (tarefa:TODO): Observable<TODO>{
    return this.http.delete<TODO>(`${this.baseUrl}/${tarefa.id}`)
  }
  /*
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1)
    this.loadRead()
    }
  */


  add() {
    const title = this.form.controls['title'].value
    const id = this.todos.length + 1
    this.todos.push(new Todo(id, title, false))
    this.tarefa.todo = title
    this.tarefa.done = false
    this.create(this.tarefa).subscribe()
    this.loadRead()
    this.form.reset();
  }

  loadRead() {
    this.read().subscribe(Tarefas => {
      this.Tarefas = Tarefas
    })
    this.mode = 'list'
   }

  changeMode (mode:string) {
    this.mode = mode
  }

}


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
