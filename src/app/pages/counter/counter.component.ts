import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increaseCounter, decreaseCounter, setCounter } from '../../store/counter/counter.actions';
import { selectCounter } from '../../store/counter/counter.selector';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter$: Observable<number>;
  value: number = 0
  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounter);
  }

  increment() {
    this.store.dispatch(increaseCounter());
  }

  decrement() {
    this.store.dispatch(decreaseCounter());
  }

  setNewValue() {
    this.store.dispatch(setCounter({ count : this.value }));
  }
}
