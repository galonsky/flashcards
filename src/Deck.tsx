import React from 'react';
import Card from './Card';
import { CardType } from './types';

interface PropTypes {
    cards: Array<CardType>;
}

const Deck = (props: PropTypes) => {
    const [index, setIndex] = React.useState(0);
    const increment = () => setIndex(index + 1);
    if (index >= props.cards.length) {
        return (
            <>
                <div>All done!</div>
                <button type="button" onClick={() => setIndex(0)}>Restart</button>
            </>
        );
    }
    const card = props.cards[index];
    return (
        <div>
            <Card {...card} />
            <button type="button" onClick={increment}>Next</button>
        </div>
    )
}

export default Deck;
