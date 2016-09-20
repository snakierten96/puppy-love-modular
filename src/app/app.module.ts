import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { HttpModule }         from '@angular/http';

import { MdSidenavModule }    from '@angular2-material/sidenav/sidenav';
import { MdListModule }       from '@angular2-material/list/list';
import { MdCardModule }       from '@angular2-material/card/card';
import { MdToolbarModule }    from '@angular2-material/toolbar/toolbar';
import { MdButtonModule }     from '@angular2-material/button/button';
import { MdInputModule }      from '@angular2-material/input/input';
import { MdCheckboxModule }   from '@angular2-material/checkbox/checkbox';
import { MdRadioModule }      from '@angular2-material/radio/radio';
import { MdIconModule }       from '@angular2-material/icon/icon/';

import { AppComponent }       from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdCardModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdRadioModule.forRoot(),
    MdIconModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
