import React from "react";
import "./Card.css";

interface CardProps {
    label: string;
}

const Card = (props: CardProps) => {
    return (
        <div>
            <img src="https://cdn.rapidrtc.com/wp-content/uploads/2021/03/BuyerJourney-Icon-1.png" alt=""/>
        </div>
    );
};

export default Card;