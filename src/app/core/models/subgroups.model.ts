import {ChildDto} from "./child.model";

export interface SubgroupDto {
  id: string;
  cycle: Cycle;
  period: Period;
  capacity: number;
  teachers: string[];
  children: ChildDto[];
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
