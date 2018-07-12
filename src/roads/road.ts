import { RoundResult } from '../round-result';

// Editable RoadRow, internal use only
export type InnerRoadRow<T extends object> = (T | undefined)[];
// Editable RoadArray, internal use only
export type InnerRoadArray<T extends object> = InnerRoadRow<T>[];

export type RoadRow<T extends object> = ReadonlyArray<T | undefined>;
export type RoadArray<T extends object> = ReadonlyArray<RoadRow<T>>;

export abstract class Road<T extends object> {
  protected abstract readonly array: RoadArray<T>;

  protected constructor(
    protected readonly row: number,
    protected readonly column: number,
    protected readonly results: ReadonlyArray<RoundResult>,
  ) {
    if (
      !Number.isInteger(row) ||
      !Number.isInteger(column) ||
      row <= 0 ||
      column <= 0
    ) {
      throw new Error('Row/Column must be positive integer');
    }
  }

  public get rowCount(): number {
    return this.row;
  }

  public get columnCount(): number {
    return this.column;
  }

  public getItem(rowIndex: number, columnIndex: number): T | undefined {
    return this.array[rowIndex][columnIndex];
  }
}
