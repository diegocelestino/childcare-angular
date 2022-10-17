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

export class RegisterTeacherCreateDto {
  subgroupId: string;
  teacherId: string;

  constructor(
    subgroupId: string,
    teacherId: string,
  ) {
    this.subgroupId = subgroupId;
    this.teacherId = teacherId;
  }
}

export interface RegisterTeacherDto {
  subgroupId: string;
  teacherId: string;
}




