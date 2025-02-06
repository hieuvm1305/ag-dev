import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable, mergeMap } from 'rxjs';
import { MockService } from '../../service/mock_service';
import { getUser, getUserSuccess, fetchUsersFailure } from './user.actions';
import { map, catchError, exhaustMap } from 'rxjs';
import { UserLogin, AuthState, UserInfo } from './user.state';
@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private moviesService = inject(MockService);

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUser),
      exhaustMap(() =>
        this.moviesService.getUser().pipe(
          map((users) => ({ type: '[User] getUserSuccess', payload: users })),
          catchError(() => of({ type: '[Users] Fetch Users Failure' }))
        )
      )
    );
  });
}
