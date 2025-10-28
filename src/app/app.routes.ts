import { Routes } from '@angular/router';
import { Granska } from '../components/granska/granska';
import { Form } from '../components/form/form';
import { Todos } from '../components/todos/todos';
import { homePage } from '../components/pages/homePage/homePage';
import { TodoPresentation } from '../components/todo-presentation/todo-presentation';

export const routes: Routes = [
    {path: '', component: homePage, title: 'Start'},
    {path: 'form', component: Form, title: 'Form'},
    {path: 'granska', component: Granska, title: 'Granska'},
    {path: 'todos', component: Todos, title: 'Todos'},
    {path: 'todos/:id', component: TodoPresentation, title: 'Todo Details'}
];
