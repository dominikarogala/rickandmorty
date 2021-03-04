import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { RestViewModule } from './views/rest-view/rest-view.module';
import { GraphqlViewModule } from './views/graphql-view/graphql-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,

    RestViewModule,
    GraphqlViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
