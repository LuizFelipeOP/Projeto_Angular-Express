import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
  import {provideHttpClient} from '@angular/common/http';
import { AppTarefaListComponent } from './app/app.tarefa.list';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppTarefaListComponent, {
  providers: [provideHttpClient()]
})