import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { IssueReducer } from './store/reducers/issue.reducer';
import { HttpClientModule } from '@angular/common/http';
import { IssueEffects } from './store/effects/issue.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      issues: IssueReducer
    }),
    HttpClientModule,
    EffectsModule.forRoot([IssueEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
