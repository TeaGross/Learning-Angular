import { Routes } from '@angular/router';
import { Granska } from '../components/granska/granska';
import { Form } from '../components/form/form';
import { Todos } from '../components/todos/todos';
import { homePage } from '../components/pages/homePage/homePage';
import { TodoPresentation } from '../components/todo-presentation/todo-presentation';
import { DigiInfo } from '../components/digi-info/digi-info';
import { DigiForm } from '../components/digi-form/digi-form';

export const routes: Routes = [
    {path: '', component: homePage, title: 'Start'},
    {path: 'form', component: Form, title: 'Form'},
    {path: 'granska', component: Granska, title: 'Granska'},
    {path: 'digi-form', component: DigiInfo, title: 'Digi-form information'},
    {path: 'digi-form-start', component: DigiForm, title: 'Digi-form'},
    {path: 'todos', component: Todos, title: 'Todos'},
    {path: 'todos/:id', component: TodoPresentation, title: 'Todo Details'}
];
