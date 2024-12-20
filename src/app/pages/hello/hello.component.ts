import { Component } from '@angular/core';
import { GlobalModules } from '../../global.module';
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [...GlobalModules],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name: string = 'John'
  counter = 1
  text = 'Hi'
  increase() {
    this.counter += 1
  }
  decrease() {
    this.counter -= 1 
  }

  constructor() {}
}
