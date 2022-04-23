import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

export default function Home(props){

    const subjectsData=["Biology","Physics","Chemistry","Mathemathics"]
    const subjects= subjectsData.map((val)=>{
        return (      
            <div className="sub">
            <h3>{val} <ArrowForwardIcon fontSize="small"/></h3>
       </div>     
    )
     })

    return(
        <div className='home'>
            <div className='left-home'>
           <img className='home-face' src={props.pic} alt=""/>
           
           <div className='home-desc'>
               <h2 className='home-name'>{props.name}</h2>
               <h3>Class:{props.class}   &nbsp;    Section:{props.section}</h3>
               <h3>Roll number: {props.roll} </h3>
               <h3> Class Teacher: {props.teacher}</h3>
           </div>
           </div>
           <div className='right-home' >
               <h2>Subjects</h2>
              {subjects}
           </div>
        </div>
    )
}