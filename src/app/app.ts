import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule,
    RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "mes telephones";
}
