import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-one',
  template: `<div>Hello from the <child-two></child-two> outer child</div>`,
  encapsulation: ViewEncapsulation.Native,
  styles: [`
     div {
       color: red;
     }
  `]
})
export class ChildOneComponent {  }
