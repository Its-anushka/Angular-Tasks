import { Routes } from '@angular/router';
import { TrainingComponent } from './training-component/training-component';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'add-training', component:TrainingComponent},
    { path: '', component: Home },
    {path: 'trainings', component:TrainingComponent}
];
