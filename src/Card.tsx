import React from 'react';

interface PropTypes {
    question: string;
    answer: string;
}

const Card = (props: PropTypes) => {
    const [isQuestion, setIsQuestion] = React.useState(true);
    const toggle = () => setIsQuestion(!isQuestion);
    return (
        <div>
            <p>
                {isQuestion ? props.question : props.answer}
            </p>
            <button type="button" onClick={toggle}>Flip</button>
        </div>
    )
}

export default Card;
