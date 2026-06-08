import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-app');

  name = "Rajkumar";

  inputValue = '';

  imgSrc = "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"

  handleClick() {
    alert('Button clicked!');
  }
}
