import { FC } from "react";
import './result.scss'
interface ResultProps {
    result: string
    showResult: boolean
}

const Result: FC<ResultProps> = ({ result, showResult }) => {
    return <div className={`result ${showResult ? 'show' : 'pending'} text_shadows`}>
        <p>{!showResult ? result : '...'}</p>
    </div>
}

export default Result;