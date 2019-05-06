import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatDatepickerModule, MatAutocompleteModule, MatSortModule, MatIconModule, MatSlideToggleModule, MatPaginatorModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExportAsModule } from 'ngx-export-as';

import {ExcelService} from './services/sharedServices';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ExportAsModule,
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
  MatAutocompleteModule,
  BrowserAnimationsModule,
    MatSortModule,
    MatIconModule,
    MatSlideToggleModule,
    MatPaginatorModule,
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
