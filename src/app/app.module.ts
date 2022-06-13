import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestTableComponent } from './test-table/test-table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MissingDataPipe } from './missing-data.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { CellStatusComponent } from './cell-status/cell-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent,
    TableFilterComponent,
    TableViewComponent,
    MissingDataPipe,
    CellStatusComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
