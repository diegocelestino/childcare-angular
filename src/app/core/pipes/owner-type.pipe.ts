import { Pipe, PipeTransform } from '@angular/core';
import {OwnerType} from "../models/contact.model";

@Pipe({
  name: 'ownerType'
})
export class OwnerTypePipe implements PipeTransform {

  transform(value: OwnerType): string {
    return OwnerType[value];
  }

}
