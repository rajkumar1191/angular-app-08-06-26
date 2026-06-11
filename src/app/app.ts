import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { CommonModule } from '@angular/common';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, About, CommonModule, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-app');

  name = "Rajkumar";

  inputValue = '';

  isVisible = true;

  personArray = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

  today = new Date().getDay();

  imgSrc = "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"

  handleClick() {
    alert('Button clicked!');
  }
}
