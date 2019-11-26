import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueItem } from './store/models/issues-item.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private ISSUES_URL = "https://api.github.com/repos/ionic-team/capacitor/issues";
  constructor(private http: HttpClient) { }

  getIssueItems() {
    return this.http.get<Array<IssueItem>>(this.ISSUES_URL)
      
  }
}
