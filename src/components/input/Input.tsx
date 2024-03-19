import React from 'react';

function Input({ enabled, guess }: { enabled: boolean; guess: (word: string) => void }) {
    const input = React.useRef<HTMLInputElement>(null);
    const [word, setWord] = React.useState('');

    React.useEffect(() => {
        input.current?.focus();
        globalThis.addEventListener('keydown', handleKeydown);

        return () => globalThis.removeEventListener('keydown', handleKeydown);

        function handleKeydown(event: KeyboardEvent) {
            'qwertyuiopasdfghjklzxcvbnm'.includes(event.key.toLowerCase()) && input.current?.focus();
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="rounded border-2 border-cust-2 px-3 py-2">
            <input
                id="a"
                type="text"
                value={word}
                placeholder="Guess a 5-letter word"
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="At least 5 letters"
                disabled={!enabled}
                onChange={handleChange}
                className="w-80 font-mono text-lg text-cust-4 placeholder:ps-1 placeholder:font-mono placeholder:text-cust-2"
                ref={input}
            />
        </form>
    );

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (word.length !== 5) return;

        setWord('');
        guess(word);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setWord(event.target.value.toUpperCase());
    }
}

export default Input;
