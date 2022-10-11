export interface ChildDto {
  id: string,
  name: string,
  birthDate: Date,
  registrationNumber: string,
  registrationDate: Date,
  movimentMap: string,
  foodRestriction: string,
  uniformDispatch: string,
  uniformDelivered: boolean,
  census: boolean,
}

export class ChildCreateDto {
  name: string;
  birthDate: Date;
  registrationNumber: string;
  registrationDate: Date;
  movimentMap: string;

  constructor(
    name: string,
    birthDate: Date,
    registrationNumber: string,
    registrationDate: Date,
    movimentMap: string,
  ) {
    this.name = name;
    this.birthDate = birthDate;
    this.registrationNumber = registrationNumber;
    this.registrationDate = registrationDate;
    this.movimentMap = movimentMap;
  }
}

