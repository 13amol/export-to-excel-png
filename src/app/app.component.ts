
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { ExportToCsv } from 'export-to-csv';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import { Angular5CsvV2 } from 'angular5-csv-v2/dist/Angular5-csv';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { ExcelService } from './services/sharedServices';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private exportAsService: ExportAsService, private excelService: ExcelService
  ) { }

  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'amol',
  };
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAs(type) {
    this.config.type = type;
    this.exportAsService.save(this.config, 'myFile');
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(ELEMENT_DATA, 'sample');
  }

  //npm i export-to-csv
  exp() {
    const options: any = {
      fieldSeparator: ',',
      quoteStrings: '"',
      filename: "sample",
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Sample table',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(ELEMENT_DATA);
  }

  //npm install --save ngx-csv
  expo2() {
    new ngxCsv(ELEMENT_DATA, 'My Report');
  }

  //npm i angular5-csv-v2
  export3() {
    var options: any = {

      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Your title',
      useBom: true,
      noDownload: true,
      // headers: ["First Name", "Last Name", "ID"],
      // nullToEmptyString: true,
      //eol: '\r\n',
    };
    new Angular5CsvV2(ELEMENT_DATA, "filename");
  }

}

