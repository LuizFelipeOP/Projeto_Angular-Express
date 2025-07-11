import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'
import { App } from './app';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-comment-list',
    templateUrl: './app.getApiResponse.html',

    styleUrls: ['./app.css'],
})

export class AppTarefaListComponent implements OnInit {
    tarefas: AppTarefaListComponent[] = [];

    constructor(private appService: AppService) {}

    descricao = "Teste";
    ngOnInit(): void {
        // this.appService.getTarefas().subscribe((tarefas) => {
        //     this.tarefas = tarefas;
        // });
        var params = {
            descricao: this.descricao
        }
        this.appService.getTestePost(params).subscribe((tarefas) => {
            console.log(tarefas);
            this.tarefas = tarefas;
        });
    }
}