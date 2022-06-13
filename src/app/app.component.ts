import { Component } from '@angular/core';
import {get_data} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="TableProj"
  inputData = get_data()
  constructor() {
  }
}
