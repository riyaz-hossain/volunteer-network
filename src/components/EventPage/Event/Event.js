import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Menu from '../../Shared/Menu/Menu';
import EventCard from '../EventCard/EventCard';

const Event = () => {
    const [ events , setEvents ] = useState([])


    const [ loggedInUser , setLoggedInUser ] = useContext(UserContext)

    useEffect(()=>{
        fetch('https://arcane-savannah-39897.herokuapp.com/volunteerEvents?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    })

    return (
        <div>
            <Menu/>
            <div className="container">
                <div className="row">
                    {
                        events.map(eventsItem =><EventCard eventsItem={eventsItem}></EventCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;