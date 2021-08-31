import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module'; // nasza zmiana

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodosComponent,
    AboutComponent,
    TodoItemComponent
  ],
  imports: [
    MaterialModule, //nasza zmiana
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
