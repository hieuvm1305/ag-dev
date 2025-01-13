import { Component } from '@angular/core';
import { GlobalModules } from '../../global.module';
import { ActivatedRoute } from '@angular/router';
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
  text = 'Hddi'
  increase() {
    let params = this.route.params
    this.counter += 1
  }
  decrease() {
    this.counter -= 1 
  }

  constructor(
    private route : ActivatedRoute
  ) {}
}
