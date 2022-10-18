import {ChildBasicDto} from "./child.model";


export interface ObservationDto {
  id: string;
  observationType: ObservationType;
  description: string;
  child: ChildBasicDto;

}

export class ObservationCreateDto {
  childId: string;
  observationType: ObservationType;
  description: string;

  constructor(
    childId: string,
    observationType: ObservationType,
    description: string,
  ) {
    this.childId = childId;
    this.observationType = observationType;
    this.description = description;
  }
}

export enum ObservationType {
  DISABILITY = ("Deficiência"),
  FOOD_RESTRICTION = ("Restrição Alimentar"),
  DRUG_ALLERGY = ("Alergia ao medicamento"),
  OTHER = ("Outros"),
}
