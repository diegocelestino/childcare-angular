import { Pipe, PipeTransform } from '@angular/core';
import {MovimentMap} from "../models/child.model";

@Pipe({
  name: 'movimentMap'
})
export class MovimentMapPipe implements PipeTransform {

  transform(value: MovimentMap): string {
    return MovimentMap[value];
  }
}
