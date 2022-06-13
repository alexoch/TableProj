import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cell-status',
  templateUrl: './cell-status.component.html',
  styleUrls: ['./cell-status.component.css']
})
export class CellStatusComponent implements OnInit {
  @Input() title!:string;
  @Input() entryVal!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
