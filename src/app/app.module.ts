import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  
declarations: [
    AppComponent
  ],
  
imports: [
    BrowserModule,
  NgxCsvParserModule ,  AppRoutingModule
 , FormsModule , Ng2SearchPipeModule ],
  
providers: [],
 
 bootstrap: [AppComponent]
})

export class AppModule { }
