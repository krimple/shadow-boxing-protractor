import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-two',
  template: `<p>Hello from the inner child</p>`,
  encapsulation: ViewEncapsulation.Native,
  styles: [`
     p {
      color: blue;
     }
  `]
})
export class ChildTwoComponent {  }
