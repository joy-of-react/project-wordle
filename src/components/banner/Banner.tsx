import { createPortal } from 'react-dom';
import { Swords } from 'lucide-react';

function Banner({ status, answer, reset }: { status: 'win' | 'fall'; answer?: string; reset: () => void }) {
    return createPortal(
        <div className="fixed inset-0 size-auto bg-cust-7">
            <div
                className={
                    'absolute inset-0 m-auto flex size-fit flex-col  items-center gap-5 [@media(width<=360px)]:scale-50 [@media(width<=450px)]:scale-cust-2'
                }
            >
                <p
                    className={`flex h-12 w-96 items-center justify-center rounded font-mono text-cust-4 ${status === 'win' ? 'bg-cust-6' : 'bg-cust-5'}`}
                >
                    {status === 'win' ? 'Congratulations, You did it!' : `You lose, the answer is "${answer}"`}
                </p>
                <button
                    onClick={reset}
                    className="flex size-fit cursor-pointer items-center gap-1 rounded  bg-cust-1 px-4 py-1 font-mono text-cust-4"
                >
                    PLAY
                    <Swords className="size-5" />
                    AGAIN
                </button>
            </div>
        </div>,
        document.body,
    );
}

export default Banner;
