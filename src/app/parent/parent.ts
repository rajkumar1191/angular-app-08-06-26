import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './../child/child';
import { CardComponent } from '../card/card';
import { ProjectedItemDirective } from '../projected-item-directive';
import { SignalsDemoComponent } from '../signals-demo/signals-demo';
import { UserService } from '../user-service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    CommonModule,
    ChildComponent,
    CardComponent,
    ProjectedItemDirective,
    SignalsDemoComponent,
  ],
  template: `
    <div style="padding: 20px;">
      <h2>Angular Lifecycle Demo</h2>

      <button (click)="changeTitle()">Change Title Text</button>
      <button (click)="toggleChild()">Toggle Child Component Visibility</button>

      <app-child
        *ngIf="showChild"
        [title]="parentTitle"
        (outputData)="captureChildData($event)"
      ></app-child>

      <button (click)="updateProjectedText()">Update Text</button>

      <app-card>
        <!-- This entire block is projected into the child card -->
        <div appProjectedItem [description]="dynamicText">
          <p>
            This live text is projected from Parent: <strong>{{ dynamicText }}</strong>
          </p>
        </div>
      </app-card>

      <app-signals-demo></app-signals-demo>
    </div>
  `,
})
export class ParentComponent implements OnInit {
  parentTitle: string = 'Initial Title';
  showChild: boolean = true;

  dynamicText: string = 'Hello World';

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.user.getUsers().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateProjectedText(): void {
    this.dynamicText = 'Updated Text at ' + new Date().toLocaleTimeString();
  }

  changeTitle(): void {
    this.parentTitle = 'Updated Title at ' + new Date().toLocaleTimeString();
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }

  captureChildData(data: any) {
    console.log('child data', data);
  }
}
