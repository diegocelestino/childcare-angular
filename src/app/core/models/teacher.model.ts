import {SubgroupBasicDto} from "./subgroups.model";

export interface TeacherDto {
  id: string;
  name: string;
  subgroups: SubgroupBasicDto
}

export class TeacherCreateDto {
  name: string;

  constructor(
    name: string,
  ) {
    this.name = name;
  }
}


