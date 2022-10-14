import {SubgroupDto} from "./subgroups.model";

export interface RoomDto {
  id: string;
  number: number;
  name: string;
  sedName: string;
  subgroups: SubgroupDto[]
}

export interface RoomBasicDto {
  id: string;
  number: number;
}

export class RoomCreateDto {
  number: number;
  name: string;
  sedName: string;

  constructor(
    number: number,
    name: string,
    sedName: string,
  ) {
    this.number = number;
    this.name = name;
    this.sedName = sedName;
  }
}

  export class RoomListDto {
  id: string;
  number: number;

  constructor(
    id: string,
    number: number,

  ) {
    this.id = id;
    this.number = number;
  }
}
