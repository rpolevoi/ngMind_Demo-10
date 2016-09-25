import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>The following number is a parent component property</h1>
             <h1>{{parentProp}}</h1>
             <br>
             <app-child-component
                [childProp]="parentProp"
                (incrementParentEvent)="parentIncrement()"
                (syncParentEvent)="syncParent($event)">
             </app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  parentProp = 567;
  
  parentIncrement() { this.parentProp++}
  syncParent(num) { this.parentProp = num;}
  
  
}
