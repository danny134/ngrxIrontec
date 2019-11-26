import { IssueState } from '../reducers/issue.reducer';

export interface AppState {
  readonly issues: IssueState
}