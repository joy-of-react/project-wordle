import React from 'react';
import Chessboard from '@/components/chessboard';
import Keyboard from '@/components/keyboard';
import Input from '@/components/input';
import Banner from '@/components/banner/Banner';
import { generate } from 'random-words';
import { range } from 'lodash-es';
import { CellStatus, GameStatus, GridData } from '@/types';

const rowCount = 6;
const colCount = 5;
const historyLimit = rowCount;
const answer = [generate({ minLength: 5, maxLength: 5 })].flat()[0].toUpperCase();

console.log(answer);

function App() {
    const [history, setHistory] = React.useState<string[]>([]);
    const gameStatus = createGameStatus(answer, history, historyLimit);
    const gridData = createGridData(rowCount, colCount, history);
    const keycodeData = createKeycodeData(answer, history);

    return (
        <div className="flex h-dvh  flex-col items-center justify-center gap-4 [@media(width<=360px)]:scale-50 [@media(width<=450px)]:scale-cust-2">
            <Chessboard gridData={gridData} />
            <Keyboard keycodeData={keycodeData} />
            {gameStatus === 'playing' ? (
                <Input guess={guess} enabled={gameStatus === 'playing'} />
            ) : (
                <Banner status={gameStatus} answer={answer} />
            )}
        </div>
    );

    function guess(word: string) {
        setHistory([...history, word]);
    }
}

function createGameStatus(answer: string, history: string[], historyLimit: number): GameStatus {
    if (history.length === 0) return 'playing';
    if (history.at(-1) === answer) return 'win';
    if (history.length === historyLimit) return 'fall';

    return 'playing';
}

function createGridData(rowCount: number, colCount: number, history: string[]) {
    const gridData: GridData = range(rowCount).map(ri => ({
        uuid: String(ri),
        cell: range(colCount).map(ci => ({ uuid: String(ci), status: 'unknown', letter: '' })),
    }));

    history.forEach((word, i) => {
        word.split('').forEach((letter, j) => {
            let status: CellStatus;

            if (!answer.includes(letter)) status = 'incorrect';
            else if (answer[j] === letter) status = 'correct';
            else status = 'misplaced';

            gridData[i].cell[j].status = status;
            gridData[i].cell[j].letter = letter;
        });
    });

    return gridData;
}

function createKeycodeData(answer: string, history: string[]) {
    const map = new Map<string, CellStatus>();

    'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').forEach(letter => map.set(letter, 'unknown'));

    history.forEach(word => {
        const letters = word.split('');

        letters.forEach((letter, i) => {
            if (map.get(letter) === 'correct') return;
            if (map.get(letter) === 'incorrect') return;

            // for "unknow"
            map.set(letter, answer.includes(letter) ? 'misplaced' : 'incorrect');

            // for "misplaced"
            if (answer[i] === letter) map.set(letter, 'correct');
        });
    });

    return map;
}

export default App;
