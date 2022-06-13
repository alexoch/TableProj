import {Component, Input} from '@angular/core';

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})


export class TestTableComponent {
  @Input() tableData!: any;
  filterStatus!: LooseObject;
  titlesArr!: string [];
  entries!: {};
  tableFiltersUpdate = (args: any): void => {
    this.filterStatus = JSON.parse(JSON.stringify(args))
  }

  constructor() {
  }

  ngOnInit() {
    this.filterStatus = this.createStatuses(this.tableData)
    this.titlesArr = this.createTitles(this.tableData)
    this.entries = this.setEntries(this.tableData)
  }

  private createTitles(tableData: any) {
    return tableData.fields.map(function (element: any) {
      return [element["key"], element["label"],element["filter"]]
    });
  }


  private createStatuses(tableData: any): LooseObject {
    let result: LooseObject = {}
    for(let entry of tableData.fields ){
      result[entry["key"]] = true
    }
    return result;
  }

  private setEntries(tableData: any) {
    return tableData.items;
  }
}
