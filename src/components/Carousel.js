import React from 'react'
import '../App.css';

export default function Carousel(props){

    return (
        <div>
            <div className='carousel'></div>
         <div className='carousel-text'>
         {  props.name==="abc" &&
             <div>
               <h1>WELCOME, PLEASE LOG IN</h1> 
               <button>log in</button>
               <button>sign up</button>
             </div>
         }
         {  props.name!=="abc" &&
             <div>
               <h1>WELCOME BACK, {props.name}</h1> 
               <button>Sign in</button>
              
             </div>
         }
        </div>
        </div>
      
    )
  
}


