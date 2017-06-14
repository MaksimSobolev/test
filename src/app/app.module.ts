import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { BoldDirective } from "./directives/bold.directive";
import { WhileDirective } from "./directives/while.directive";

import { FactorialPipe } from "./pipes/factorial.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
