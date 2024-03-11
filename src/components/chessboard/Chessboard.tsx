import { GridData, CellStatus } from '@/types';

function Chessboard({ gridData }: { gridData: GridData }) {
    return (
        <div className="flex flex-col gap-1">
            {gridData.map(({ uuid, cell }) => (
                <p key={uuid} className="flex gap-1">
                    {cell.map(({ uuid, status, letter }) => (
                        <Cell key={uuid} status={status}>
                            {letter}
                        </Cell>
                    ))}
                </p>
            ))}
        </div>
    );
}

function Cell({ children, status }: { children?: React.ReactNode; status: CellStatus }) {
    const bgColor = createBgColor(status);
    const bdColor = createBdColor(status);

    return (
        <span
            className={`
            ${bgColor}
            ${bdColor}
            flex aspect-square h-14 items-center justify-center border-2 border-cust-2 font-mono text-4xl font-semibold text-cust-4
            `}
        >
            {children}
        </span>
    );
}

function createBgColor(status: CellStatus) {
    switch (status) {
        case 'unknown':
            return 'bg-cust-1';
        case 'correct':
            return 'bg-cust-6';
        case 'incorrect':
            return 'bg-cust-2';
        case 'misplaced':
            return 'bg-cust-5';
    }
}

function createBdColor(status: CellStatus) {
    switch (status) {
        case 'unknown':
            return 'border-cust-2';
        case 'correct':
            return 'border-cust-6';
        case 'incorrect':
            return 'border-cust-2';
        case 'misplaced':
            return 'border-cust-5';
    }
}

export default Chessboard;
