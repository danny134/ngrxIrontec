
import { Action } from '@ngrx/store';
import { IssueItem } from '../models/issues-item.model';

export enum IssueActionTypes {
  LOAD_ISSUES = '[ISSUES] Load Issues',
  LOAD_ISSUES_SUCCESS = '[ISSUES] Load Issues Success',
  LOAD_ISSUES_FAILURE = '[ISSUES] Load Issues Failure',
}

export class LoadISSUESAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUES

  constructor(public url:string){}
}
export class LoadISSUESSuccessAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUES_SUCCESS

  constructor(public payload: Array<IssueItem>) { }

}
export class LoadISSUESFailureAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUES_FAILURE

  constructor(public payload: string) { }
}


export type IssueAction =
  LoadISSUESAction |
  LoadISSUESFailureAction |
  LoadISSUESSuccessAction
