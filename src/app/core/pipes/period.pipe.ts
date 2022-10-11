import { Pipe, PipeTransform } from '@angular/core';
import {Period} from "../models/subgroups.model";

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  transform(value: Period): string {
    return Period[value];
  }

}
