import { IssueActionTypes, IssueAction } from '../actions/issue.actions';
import { IssueItem } from '../models/issues-item.model';

export interface IssueState {
  list: IssueItem[],
  loading: boolean,
  error: Error;
}


const initialState: IssueState = {
  list: [],
  loading: false,
  error: undefined
};

export function IssueReducer(state: IssueState = initialState, action: IssueAction) {
  switch (action.type) {
    case IssueActionTypes.LOAD_ISSUES:
      return {
        ...state,
        loading: true
      }
    case IssueActionTypes.LOAD_ISSUES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    
    case IssueActionTypes.LOAD_ISSUES_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}