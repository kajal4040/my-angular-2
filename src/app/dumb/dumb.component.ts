import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss']
})
export class DumbComponent {
  @Input() dumbData: any; // Define an input property to receive data
  constructor() {}
}
