export interface SubgroupDto {
  id: string;
  cycle: string;
  period: string;
  capacity: number;
  roomId: string;
}

export class SubgroupCreateDto {
  cycle: string;
  period: string;
  capacity: number;
  roomId: string;

  constructor(
    cycle: string,
    period: string,
    capacity: number,
    roomId: string,
  ) {
    this.cycle = cycle;
    this.period = period;
    this.capacity = capacity;
    this.roomId = roomId;
  }
}
