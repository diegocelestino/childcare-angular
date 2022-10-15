import {SubgroupBasicDto} from "./subgroups.model";

export interface ChildDto {
  id: string,
  name: string,
  birthDate: Date,
  registrationNumber: string,
  registrationDate: Date,
  movimentMap: MovimentMap,
  foodRestriction: string,
  uniformDispatch: string,
  uniformDelivered: boolean,
  census: boolean,
  subgroup: SubgroupBasicDto;
}

export interface ChildBasicDto {
  id: string,
  name: string,
}

export class ChildCreateDto {
  name: string;
  birthDate: Date;
  registrationNumber: string;
  registrationDate: Date;
  movimentMap: MovimentMap;
  subgroupId: string;

  constructor(
    name: string,
    birthDate: Date,
    registrationNumber: string,
    registrationDate: Date,
    movimentMap: MovimentMap,
    subgroupId: string,
  ) {
    this.name = name;
    this.birthDate = birthDate;
    this.registrationNumber = registrationNumber;
    this.registrationDate = registrationDate;
    this.movimentMap = movimentMap;
    this.subgroupId = subgroupId;
  }
}

export enum MovimentMap {
  JANUARY = ("Janeiro"),
  FEBRUARY = ("Fevereiro"),
  MARCH = ("Março"),
  APRIL = ("Abril"),
  MAY = ("Maio"),
  JUNE = ("Junho"),
  JULY = ("Julho"),
  AUGUST = ("Agosto"),
  SEPTEMBER = ("Setembro"),
  OCTOBER = ("Outubro"),
  NOVEMBER = ("Novembro"),
  DECEMBER = ("Dezembro"),
  NONE = ("Não se aplica"),
}

