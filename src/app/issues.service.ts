import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueItem } from './store/models/issues-item.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  getIssueItems(url:string) {
    return this.http.get<Array<IssueItem>>(url);
      
  }

}
