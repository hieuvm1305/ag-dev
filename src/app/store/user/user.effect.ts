import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { MockService } from '../../service/mock_service';
import { loginSuccess, login } from './user.actions';
import { map, catchError, mergeMap, exhaustMap } from 'rxjs';
import { UserLogin } from './user.state';
import { UserLoginResponse } from '../../utils/types/response';
@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private service: MockService) {}
  userLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(login), // Listen for the login action
      mergeMap((user: UserLogin) =>
        this.service.logIn(user).pipe(
          // Call the API
          map((response: any) => {
            console.log(response);
            return loginSuccess({
              isLoggedIn: true,
              user: response.data.user,
            });
          })
        )
      )
    )
  );
}
