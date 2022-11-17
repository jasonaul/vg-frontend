import React from "react";
import { useParams } from 'react-router-dom';

import DestinationList from "../components/DestinationList";

const DUMMY_DESTINATIONS = [
    {
        id: 'd1',
        title: 'Empire State Building',
        description: 'A really famous building.',
        image: 'https://i.imgur.com/KnSikdp.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'd2',
        title: 'Empire State Building',
        description: 'A really famous building.',
        image: 'https://i.imgur.com/KnSikdp.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'd3',
        title: 'Empire State Building',
        description: 'A really famous building.',
        image: 'https://i.imgur.com/KnSikdp.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
]

const UserDestinations = () => {
    return <DestinationList items={DUMMY_DESTINATIONS}/>
};

// export const SingleDestination = () => {
//     return <DestinationList key={DUMMY_DESTINATIONS.id}/>
// }

// export const SingleDestination = React.createClass({
//     render: function() {
//         const selectedID = this.props.selectedID
//         const destinationPage = this.props.DUMMY_DESTINATIONS.reduce(function(destination, current) {
//             return destination.id == selectedID ? current : destination;
//         }, undefined);

//         return (
//             <DestinationList headline={destinationPage.title} key={destinationPage.id}>
//                 {destinationPage.description}
//             </DestinationList>
//         );
//     }
//     }
// )

export default UserDestinations