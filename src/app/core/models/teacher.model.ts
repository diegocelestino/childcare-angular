import {SubgroupBasicDto} from "./subgroups.model";

export interface TeacherDto {
  id: string;
  name: string;
  subgroups: SubgroupBasicDto
}

export class TeacherCreateDto {
  name: string;
  subgroupId: string;

  constructor(
    name: string,
    subgroupId: string,
  ) {
    this.name = name;
    this.subgroupId = subgroupId;
  }
}


