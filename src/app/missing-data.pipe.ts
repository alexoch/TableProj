import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missingData'
})
export class MissingDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value ===null||value ===undefined||value ===''){
      return "—"
    }
    return value;
  }

}
