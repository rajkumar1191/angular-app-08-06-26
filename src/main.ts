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

     Directives - special markers in the template that tell Angular to do something with a DOM element. They can be structural (like *ngIf, *ngFor) or attribute directives (like [ngClass], [ngStyle]).
         - Component directives - directives with a template. They are the most common type of directive and are used to create components.
         - Structural directives - directives that change the structure of the DOM. They are used to add or remove elements from the DOM based on a condition or to repeat elements based on a collection.
               1. @if - conditionally includes a template based on the value of an expression.
               2. @for - repeats a template for each item in a collection.
               3. @switch - conditionally includes a template based on the value of an expression, similar to a switch statement in programming languages.
         - Attribute directives - directives that change the appearance or behavior of an element. They are used to add or remove classes, styles, or attributes from an element.

      Pipes - a way to transform data in the template. They are used to format data, such as dates, numbers, or strings, before displaying it in the template.
            - DatePipe - formats a date value according to locale rules.
            - CurrencyPipe - formats a number as currency according to locale rules.
            - UpperCasePipe - transforms text to uppercase.
            - LowerCasePipe - transforms text to lowercase.
            - AsyncPipe - subscribes to an Observable or Promise and returns the latest value it has emitted.
            - SlicePipe - creates a new array or string containing a subset of the elements or characters from the original array or string.
            - JsonPipe - converts a value into its JSON representation.
            - PercentPipe - formats a number as a percentage according to locale rules.
            - DecimalPipe - formats a number as text with a specified number of decimal places and locale-specific separators.
            - Custom Pipes - you can create your own custom pipes to transform data in a way that is specific to your application.
      Types of Pipes:
            1. Pure Pipes - pipes that are stateless and return the same output for the same input. They are only re-evaluated when their input changes.
            2. Impure Pipes - pipes that are stateful and can return different output for the same input. They are re-evaluated on every change detection cycle, which can lead to performance issues if not used carefully.
  */