import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'
import { App } from './app';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-comment-list',
    templateUrl: './app.getApiResponse.html',
    imports: [RouterOutlet],

    styleUrls: ['./app.css'],
})

export class AppTarefaListComponent implements OnInit {
    tarefas: AppTarefaListComponent[] = [];

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.appService.getTarefas().subscribe((tarefas) => {
            this.tarefas = tarefas;
        });
    }
}