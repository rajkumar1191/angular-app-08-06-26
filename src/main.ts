import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  /*
     Components - the building blocks of Angular applications. They control a patch of screen called a view.

     {{}} - interpolation syntax to display data from the component class in the template.

     Data binding - the mechanism for coordinating parts of a template with parts of a component. It can be one-way (interpolation, property binding, event binding) or two-way (two-way data binding).

     event binding - a way to listen for and respond to user actions in the template. It uses parentheses () to bind an event to a method in the component class.

     property binding - a way to bind a property of an HTML element to a property in the component class. It uses square brackets [src]="imgSrc" to bind a property.

     [()] - two-way data binding syntax that combines property binding and event binding. It allows for automatic synchronization of data between the component class and the template.

  */