import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, UpperCasePipe } from '@angular/common';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, UpperCasePipe, PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'usense-angular-test-task';
}
