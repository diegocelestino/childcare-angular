import { Pipe, PipeTransform } from '@angular/core';
import {ObservationType} from "../models/observation.model";

@Pipe({
  name: 'observationType'
})
export class ObservationTypePipe implements PipeTransform {

  transform(value: ObservationType): string {
    return ObservationType[value];
  }

}
