import { Routes } from '@angular/router';
import { Granska } from '../components/granska/granska';
import { Form } from '../components/form/form';
import { Todos } from '../components/todos/todos';
import { homePage } from '../components/pages/homePage/homePage';
import { TodoPresentation } from '../components/todo-presentation/todo-presentation';
import { DigiInfo } from '../components/digi-info/digi-info';
import { DigiForm } from '../components/digi-form/digi-form';
import { DigiGranska } from '../components/digi-granska/digi-granska';
import { DigiEnd } from '../components/digi-end/digi-end';

export const routes: Routes = [
    {path: '', component: homePage, title: 'Start'},
    {path: 'form', component: Form, title: 'Form'},
    {path: 'granska', component: Granska, title: 'Granska'},
    {path: 'digi-form-start', component: DigiInfo, title: 'Digi-form start'},
    {path: 'digi-form', component: DigiForm, title: 'Digi-form'},
    {path: 'digi-form-granska', component: DigiGranska, title: 'Granska'},
    {path: 'digi-form-end', component: DigiEnd, title: 'Kvittens'},
    {path: 'todos', component: Todos, title: 'Todos'},
    {path: 'todos/:id', component: TodoPresentation, title: 'Todo Details'}
];
