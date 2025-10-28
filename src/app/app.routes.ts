import { Routes } from '@angular/router';
import { Granska } from '../components/granska/granska';
import { Form } from '../components/form/form';
import { Todos } from '../components/todos/todos';
import { homePage } from '../components/pages/homePage/homePage';

export const routes: Routes = [
    {path: '', component: homePage, title: 'Start'},
    {path: 'form', component: Form, title: 'Form'},
    {path: 'granska', component: Granska, title: 'Granska'},
    {path: 'todos', component: Todos, title: 'Todos'},
];
