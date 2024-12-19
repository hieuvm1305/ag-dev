import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name: string = 'John'
  counter = 1
  increase() {
    this.counter += 1
  }
  decrease() {
    this.counter -= 1 
  }

  constructor() {}
}
