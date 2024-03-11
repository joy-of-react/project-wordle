type CellStatus = 'correct' | 'incorrect' | 'misplaced' | 'unknown';
type GameStatus = 'playing' | 'win' | 'fall';
type GridData = {
    uuid: string;
    cell: {
        uuid: string;
        status: CellStatus;
        letter: string;
    }[];
}[];

export type { CellStatus, GameStatus, GridData };
