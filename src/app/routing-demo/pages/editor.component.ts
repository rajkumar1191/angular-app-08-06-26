import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HasUnsavedChanges } from '../routing-demo.guards';

@Component({
  selector: 'app-editor',
  imports: [FormsModule],
  template: `
    <section>
      <h2>CanDeactivate editor</h2>
      <p>Edit the text and navigate away. The guard will ask for confirmation.</p>
      <textarea [(ngModel)]="text" (ngModelChange)="dirty = true" rows="6"></textarea>
      <br>
      <button (click)="save()">Save</button>
      <span>{{ dirty ? ' Unsaved changes' : ' All changes saved' }}</span>
    </section>
  `,
  styles: [`textarea { width: min(100%, 600px); }`],
})
export class EditorComponent implements HasUnsavedChanges {
  text = 'Try changing this draft.';
  dirty = false;

  save(): void {
    this.dirty = false;
  }

  hasUnsavedChanges(): boolean {
    return this.dirty;
  }
}
