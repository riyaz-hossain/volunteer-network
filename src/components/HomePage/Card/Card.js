import React, { useEffect, useState } from 'react';
import CardDetails from '../CardDetails/CardDetails';

const Card = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-39897.herokuapp.com/volunteering')
            .then(res => res.json())
            .then(data => setCardData(data))
    })
    return (
        <div className="container">
            <div className="row">
                {
                    cardData.map(data => <CardDetails data={data}></CardDetails>)
                }
            </div>
        </div>
    );
};

export default Card;