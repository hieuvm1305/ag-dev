import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MockService } from '../../service/mock_service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { getUser } from '../../store/user/user.actions';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/user/user.state';
import { selectUser } from '../../store/user/user.selector';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(
    private mock_service: MockService,
    private http: HttpClient,
    private store: Store,
  ){
    this.users$ = this.store.select(selectUser);
  }

  users$: Observable<AuthState>

  makeHttpRequest(): void {
    this.http.get('https://636c6e3bad62451f9fca0554.mockapi.io/api/v1/user', { observe: 'response' })
      .subscribe({
        next: response => {
          console.log('Full HTTP Response:', response);
          console.log('Status:', response.status);
          console.log('Body:', response.body);
          console.log('Headers:', response.headers);
        },
        error: error => {
          console.error('Error:', error);
        }
      });
  }
  display() {
    console.log('aaaaaaaaa');
    console.log(this.users$)
  }
  ngOnInit(): void {
    this.store.dispatch(getUser())
  }
}
