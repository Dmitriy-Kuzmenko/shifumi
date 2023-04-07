import { FC } from 'react';
import { Choice } from '../../types/choices';
import './PlayCard.scss'
interface PlayCardProps {
    onClick: VoidFunction;
    title: Choice;
    active: Choice | null
    disabled: boolean
}

const PlayCard: FC<PlayCardProps> = ({ title, onClick, active, disabled }) => {
    return (
        <button className={`card ${active === title ? 'active' : ''}`} onClick={onClick} disabled={disabled}>
            <img className='img' src={`${title}.png`} alt={title}></img>
        </button>)
};

export default PlayCard;
