
export interface GuardianDto {
  id: string;
  name: string;
  cpf: string;
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


