import React from 'react';
import Card from '../components/card'
import {EventsData} from '../components/Data-sidebar';

export default function Event(){

    const events=EventsData.map((val)=>{
        return (      
        <Card 
               img={val.img}
               title={val.title}
               line1={val.line1}
               line2={val.line2}
               date={val.date}/>
    
    )
     })
  
    return(
        <div>
         <div className='event-header'>
             <h1>Events</h1>
             <h6>We have an array of interesting events coming up, from sports to cultural. 
                 Participate to take part in the celebrations or contact the respective student coucil member.
             </h6>
         </div>
         <div className='card-container'>
            {events}
        </div>
        </div>
    )

    }
  