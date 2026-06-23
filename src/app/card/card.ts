import { Component, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ProjectedItemDirective } from './../projected-item-directive';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div style="border: 2px dashed #007bff; padding: 15px; margin: 10px;">
      <h2>Child Card Container</h2>

      <!-- Placeholder where parent content lands -->
      <ng-content> </ng-content>
    </div>
  `,
})
export class CardComponent implements AfterContentInit, AfterContentChecked {
  // Look for the directive inside the projected content slot
  @ContentChild(ProjectedItemDirective) projectedData!: ProjectedItemDirective;

  ngAfterContentInit(): void {
    console.log('1. ngAfterContentInit: Projected content initialized.');
    // Safe to access the projected directive data now
    if (this.projectedData) {
      console.log('Found projected description:', this.projectedData.description);
    }
  }

  ngAfterContentChecked(): void {
    console.log('2. ngAfterContentChecked: Angular just verified projected content for updates.');
    // Triggers initially, and every time change detection runs on this content
    if (this.projectedData) {
      console.log('Latest projected description state:', this.projectedData.description);
    }
  }
}
