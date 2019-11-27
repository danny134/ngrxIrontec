import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { IssueItem } from './store/models/issues-item.model';
import { LoadISSUESAction } from './store/actions/issue.actions';
import { IssueEffects } from './store/effects/issue.effects';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // issuesItems: Observable<Array<IssueItem>>;
  issuesItems;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  url: string;
  onSubmit() {
    return this.url;
  }
  cli(){
    this.issuesItems = null;
    this.issuesService.getIssueItems(this.url);
    this.issuesItems = this.store.select(store => store.issues.list);
    this.loading$ = this.store.select(store => store.issues.loading);
    this.error$ = this.store.select(store => store.issues.error);

    this.store.dispatch(new LoadISSUESAction(this.url));
  }
  constructor(private store: Store<AppState>,private issuesService: IssuesService) { }

  ngOnInit() {
    
  }
}
