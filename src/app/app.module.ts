import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'activepost',
    component: ActivePostComponent,
  },
  {
    path: 'inactivePost',
    component: InactivePostComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
