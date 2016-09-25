import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h1>The following number is a child component property bound to input from the parent component property</h1>
            <h1>{{childProp}}</h1>
            <button (click)="childIncrement()">increment child only</button>
            <button (click)="parentIncrement()">increment parent</button>
            <button (click)="setParentToChild()">sync parent to child</button>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
  @Output() incrementParentEvent = new EventEmitter();
  @Output() syncParentEvent = new EventEmitter();
  
  parentIncrement() {this.incrementParentEvent.emit(null);}
  setParentToChild() {this.syncParentEvent.emit(this.childProp);}
 
  childIncrement() {this.childProp++;}
  
}
