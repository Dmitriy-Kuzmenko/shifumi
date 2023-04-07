import { FC, useState } from 'react';
import useResult from '../../hooks/useResult';
import { Choice } from '../../types/choices';
import { timer } from '../../utils/timer';
import PlayCard from '../PlayCard/PlayCard';
import Result from '../result/Result';
import './Playground.scss';
interface PlaygroundProps { }

const Playground: FC<PlaygroundProps> = () => {
    const [userChoice, setUserChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice>('rock');
    const [isPending, setIsPending] = useState(false);
    const result = useResult(userChoice, computerChoice);

    const choices = ['rock', 'paper', 'scissors'];

    const handleClick = (choice: Choice) => {
        setUserChoice(choice);
        setWinner();
    };
    const setWinner = async () => {
        setIsPending(true);
        await timer(2000);
        const computerChoice = choices[
            Math.floor(Math.random() * choices.length)
        ] as Choice;
        setComputerChoice(computerChoice);
        setIsPending(false);
    };

    return (
        <div>
            {computerChoice && (
                <div className='computer'>
                    <img
                        className={`${isPending ? 'shake' : ''}`}
                        src={`${isPending ? 'rock' : computerChoice}.png`}
                        alt={computerChoice}
                    ></img>
                </div>
            )}
            {userChoice && computerChoice && result && (
                <Result result={result} showResult={isPending} />
            )}
            <div className='playground'>
                <PlayCard onClick={() => handleClick('rock')} title={'rock'} active={userChoice} disabled={isPending} />
                <PlayCard onClick={() => handleClick('paper')} title={'paper'} active={userChoice} disabled={isPending} />
                <PlayCard onClick={() => handleClick('scissors')} title={'scissors'} active={userChoice} disabled={isPending} />
            </div>
            <p className='text_shadows'>Chouse your sign</p>
        </div>
    );
};

export default Playground;
