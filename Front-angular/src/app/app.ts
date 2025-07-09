import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Pagina inicial';
}
