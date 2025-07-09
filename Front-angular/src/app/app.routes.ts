import { Routes } from '@angular/router';
import { App } from './app';
import { AppTarefaListComponent } from './app.tarefa.list';
import {HttpClientModule} from '@angular/common/http'; 

export const routes: Routes = [
      { path: '', component: App }, // Default route
      { path: 'tarefas', component: AppTarefaListComponent },
    ];
