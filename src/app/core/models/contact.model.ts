import {ChildBasicDto} from "./child.model";


export interface ContactDto {
  id: string;
  ownerName: string;
  ownerType: OwnerType;
  cellphone: string;
  child: ChildBasicDto;

}

export class ContactCreateDto {
  ownerName: string;
  ownerType: OwnerType;
  cellphone: string;
  childId: string;

  constructor(
    ownerName: string,
    ownerType: OwnerType,
    cellphone: string,
    childId: string
  ) {
    this.ownerName = ownerName;
    this.ownerType = ownerType;
    this.cellphone = cellphone;
    this.childId = childId;
  }
}

export enum OwnerType {
  FATHER = ("Pai"),
  MOTHER = ("Mãe"),
  SISTER = ("Irmã"),
  BROTHER = ("Irmão"),
  OTHER = ("Outros"),
}


