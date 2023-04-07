import { useEffect, useState } from 'react';
import { results } from '../constants/results';
import { Choice } from '../types/choices';

const useResult = (userChoice: Choice | null, computerChoice: Choice | null): string | null => {
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const getResult = (userChoice: Choice, computerChoice: Choice) => {
            if (userChoice === computerChoice) {
                setResult(results.TIE);
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                setResult(results.USER_WIN);
            } else {
                setResult(results.COMP_WIN);
            }
        };

        if (userChoice && computerChoice) {
            getResult(userChoice, computerChoice);
        }
    }, [userChoice, computerChoice]);

    return result;
};

export default useResult;