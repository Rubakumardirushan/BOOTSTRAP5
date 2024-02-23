import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningComponent } from './Bootstrap/learning/learning.component';
import { FindUserComponent } from './GitHub/find-user/find-user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LearningComponent,FindUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOTSTRAP5';
}
