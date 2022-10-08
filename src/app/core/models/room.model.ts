export interface RoomDto {
  id: string;
  number: number;
  name: string;
  sedName: string;
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
