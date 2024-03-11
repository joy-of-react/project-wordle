function Banner({ status, answer }: { status: 'win' | 'fall'; answer?: string }) {
    return (
        <p
            className={`flex h-12 w-96 items-center justify-center rounded font-mono text-cust-4 ${status === 'win' ? 'bg-cust-6' : 'bg-cust-5'}`}
        >
            {status === 'win' ? 'Congratulations, You did it!' : `You lose, the answer is "${answer}"`}
        </p>
    );
}

export default Banner;
