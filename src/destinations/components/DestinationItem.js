import React from "react";
import './DestinationItem.css'
import Card from "../../shared/components/UIComponents/Card";


const DestinationItem = props => {
    return <li className="destination-item">
        <div className="destination-item-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="destination-item-info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
    </li>
};

export default DestinationItem