import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { IssueItem } from './store/models/issues-item.model';
import { LoadISSUESAction } from './store/actions/issue.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  issuesItems: Observable<Array<IssueItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.issuesItems = this.store.select(store => store.issues.list);
    this.loading$ = this.store.select(store => store.issues.loading);
    this.error$ = this.store.select(store => store.issues.error);

    this.store.dispatch(new LoadISSUESAction());
  }
}
