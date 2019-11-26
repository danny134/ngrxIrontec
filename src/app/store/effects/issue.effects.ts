import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadISSUESAction, IssueActionTypes, LoadISSUESSuccessAction, LoadISSUESFailureAction } from '../actions/issue.actions'
import { of } from 'rxjs';
import { IssuesService } from 'src/app/issues.service';

@Injectable()
export class IssueEffects {

  @Effect() loadIssue$ = this.actions$
    .pipe(
      ofType<LoadISSUESAction>(IssueActionTypes.LOAD_ISSUES),
      mergeMap(
        () => this.issuesService.getIssueItems()
          .pipe(
            map(data => {
              return new LoadISSUESSuccessAction(data)
            }),
            catchError(error => of(new LoadISSUESFailureAction(error)))
          )
      ),
    )


  constructor(
    private actions$: Actions,
    private issuesService: IssuesService
  ) { }
}