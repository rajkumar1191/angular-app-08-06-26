import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
      <h3>Child Component</h3>
      <p>Received Title: {{ title }}</p>
      <p>Seconds Active: {{ counter }}</p>

      <input #nameInput type="text" placeholder="Type here..." />
    </div>
  `,
})
export class ChildComponent
  implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input() title: string = '';
  counter: number = 0;
  intervalId: any;

  @Output() outputData = new EventEmitter();

  @ViewChild('nameInput') nameInputRef!: ElementRef;

  constructor() {
    console.log('1. Constructor: Component object allocated. Inputs are NOT available yet.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges: Input property updated.', changes);
    // You can inspect old vs current value here
    if (changes['title']) {
      const current = changes['title'].currentValue;
      const previous = changes['title'].previousValue;
      console.log(`Title changed from "${previous}" to "${current}"`);
    }
  }

  ngOnInit(): void {
    console.log('3. ngOnInit: Component initialized. Safely fetch data or start processes.');
    // Start an interval timer
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    this.outputData.emit(this.counter);
  }

  ngDoCheck() {}

  ngAfterViewInit(): void {
    console.log('4. ngAfterViewInit: DOM is fully drawn. Safe to touch HTML elements.');
    // Focus the input box automatically once the UI loads
    this.nameInputRef.nativeElement.focus();
  }

  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy: Cleaning up resources to avoid memory leaks.');
    // Stop the interval loop when the component leaves the DOM
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
