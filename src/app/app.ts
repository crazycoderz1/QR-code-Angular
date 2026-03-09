import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { UserInfo } from './user-info/user-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('qr_code_generator');
}
