import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {
  get myForm(): FormGroup {
    return this._myForm;
  }

  set myForm(value: FormGroup) {
    this._myForm = value;
  }

  @Input()  updateFilters!: (args: any) => void;
  @Input() filtersTitles!:any;
  @Input() filtersStatus!:any;
  _myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    // {
    //   statusEntry: true,
    //     versionEntry: true,
    //   dateCreated: true,
    //   dateChanged: true
    // }
    this._myForm = this.formBuilder.group(this.filtersStatus);
    this.onChanges()
  }

  onChanges(): void {
    this._myForm.valueChanges.subscribe(val => {
      this.updateFilters(val)
      // console.log(val);
    });
  }


}
