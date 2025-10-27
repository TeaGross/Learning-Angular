import { Routes } from '@angular/router';
import { Granska } from '../components/granska/granska';
import { Form } from '../components/form/form';

export const routes: Routes = [
    {path: '', component: Form, title: 'Form'},
    {path: 'granska', component: Granska, title: 'Granska'},
];
