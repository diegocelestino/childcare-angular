import {ChildDto} from "./child.model";
import {RoomBasicDto, RoomDto} from "./room.model";
import {TeacherDto} from "./teacher.model";

export interface SubgroupDto {
  id: string;
  cycle: Cycle;
  period: Period;
  capacity: number;
  teachers: TeacherDto[];
  children: ChildDto[];
  room: RoomBasicDto;
}

export interface SubgroupBasicDto {
  id: string;
  cycle: Cycle;
  period: Period;
  capacity: number;
}

export class SubgroupCreateDto {
  cycle: Cycle;
  period: Period;
  capacity: number;
  roomId: string;

  constructor(
    cycle: Cycle,
    period: Period,
    capacity: number,
    roomId: string,
  ) {
    this.cycle = cycle;
    this.period = period;
    this.capacity = capacity;
    this.roomId = roomId;
  }
}

export enum Cycle {
  MATERNAL = ("Berçário"),
  INITIAL = ("Inicial"),
  FINAL = ("Final"),
}

export enum Period {
  MORNING = ("Manhã"),
  AFTERNOON = ("Tarde"),
  INTEGRAL = ("Integral"),
}
