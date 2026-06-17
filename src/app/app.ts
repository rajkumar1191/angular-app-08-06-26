import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from './highlight';
import { SqrtPipe } from './sqrt-pipe';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, About, CommonModule, Highlight, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, AsyncPipe, SlicePipe, JsonPipe, PercentPipe, DecimalPipe, SqrtPipe, Contact ],
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

  tdate = new Date();

  asyncData = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded asynchronously!');
    }, 2000);
  });

  imgSrc = "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"

  handleClick() {
    alert('Button clicked!');
  }
}
