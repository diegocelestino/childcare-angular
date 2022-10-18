import {ChildBasicDto} from "./child.model";

export interface GuardianDto {
  id: string;
  name: string;
  cpf: string;
  child: ChildBasicDto;
}

export class GuardianCreateDto {
  name: string;
  cpf: string;
  childId: string;

  constructor(
    name: string,
    cpf: string,
    childId: string,
  ) {
    this.name = name;
    this.cpf = cpf;
    this.childId = childId;
  }
}


