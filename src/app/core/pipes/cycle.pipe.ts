import { Pipe, PipeTransform } from '@angular/core';
import {Cycle} from "../models/subgroups.model";

@Pipe({
  name: 'cycle'
})
export class CyclePipe implements PipeTransform {

  transform(value: Cycle): string {
    return Cycle[value];
  }

}
