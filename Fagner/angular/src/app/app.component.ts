import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core'; 
import { Todo } from 'src/models/todo.model';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode:string = 'list'
  public todos: Todo[] = []; //array vazio
  public title: string ='Minhas tarefas'
  public form: FormGroup
  baseUrl: "http://localhost:3001/tarefas"

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    })
    this.load()   //Dentro do construtor o método vai ser iniciado toda vez que a plicação inicia
  }
/*
  createTodo ():void {
    this.
  }
*/

  create (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo)
    this.save()
    this.clear()
  }

  add() {
    // this.form.value => { title: 'Título' }
    const title = this.form.controls['title'].value
    const id = this.todos.length + 1
    this.todos.push(new Todo(id, title, false))
    this.create(this.todos[id])
    this.save()
    this.clear()
  }

  clear() {
    this.form.reset();
  }


  remove(todo:Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1)
    this.save()
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true
    this.save()
  }

  markAsUndone(todo: Todo){
    todo.done = false
    this.save()
  }

  save() {
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
    this.mode = 'list'
  }

  load() {
    const data = localStorage.getItem('todos')
    if (data) {
      this.todos = JSON.parse(data)
    }
    else {
      this.todos = []
    }
  }
  changeMode (mode:string) {
    this.mode = mode
  }

}

//No typeScript com this. tenho acesso a todos os métodos e atributos dentro da classe
//O tipo any aceita qualquer tipo de variável (number, string, etc)
