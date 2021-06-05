import React from 'react';
import './App.css';
import { CARDS } from './data';
import Deck from './Deck';

function App() {
    const cards = CARDS;
    return (
        <div className="App">
            <Deck cards={cards} />
        </div>
    );
}

export default App;
