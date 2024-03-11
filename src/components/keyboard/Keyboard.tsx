import { Delete, CornerDownLeft } from 'lucide-react';
import { CellStatus } from '@/types';

function Keyboard({ keycodeData }: { keycodeData: Map<string, CellStatus> }) {
    return (
        <div className="flex flex-col items-center gap-cust-1">
            <p className="flex gap-cust-1">
                <Keycodes str="QWERTYUIOP" keycodeData={keycodeData} />
            </p>

            <p className="flex gap-cust-1">
                <Keycodes str="ASDFGHJKL" keycodeData={keycodeData} />
            </p>

            <p className="flex gap-cust-1">
                <Keycode>
                    <CornerDownLeft />
                </Keycode>
                <Keycodes str="ZXCVBNM" keycodeData={keycodeData} />
                <Keycode>
                    <Delete />
                </Keycode>
            </p>
        </div>
    );
}

function Keycodes({ str, keycodeData }: { str: string; keycodeData: Map<string, CellStatus> }) {
    return (
        <>
            {str.split('').map(letter => {
                const cellStatus = keycodeData.get(letter) ?? 'unknown';
                const bgColor = createBgColor(cellStatus);

                return (
                    <Keycode key={letter} bgColor={bgColor}>
                        {letter}
                    </Keycode>
                );
            })}
        </>
    );
}

function Keycode({ children, bgColor = '' }: { children: React.ReactNode; bgColor?: string }) {
    return (
        <button className={`${bgColor} h-14 rounded bg-cust-3 pe-4 ps-4 font-mono text-2xl font-medium text-cust-4`}>
            {children}
        </button>
    );
}

function createBgColor(status: CellStatus) {
    switch (status) {
        case 'unknown':
            return 'bg-cust-3';
        case 'correct':
            return 'bg-cust-6';
        case 'incorrect':
            return 'bg-cust-2';
        case 'misplaced':
            return 'bg-cust-5';
    }
}

export default Keyboard;
