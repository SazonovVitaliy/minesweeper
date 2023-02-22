export interface CellState {
  value: number | string;
  open: boolean;
  x: number;
  y: number;
  flagged: boolean;
}

export interface FieldColumns {
  column: CellState[];
}

export interface FieldState {
  field: FieldColumns[];
}

export interface Field {
  rows: number;
  columns: number;
  bombs: number;
}
