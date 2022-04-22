import React from 'react'
import {SidebarData} from './Data-sidebar.js'
import '../App.css'


export default function Sidebar(){

    
    return (
        <div className='Sidebar'>
            <ul className='sblist'>
                {SidebarData.map((val,key) =>{
                   return(
                       <li className='sbrow' key={key}
                           onClick={()=>{window.location.pathname= val.link;
                                  }}
                       > 
                           {" "}
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                       </li>
                   );
                })}
            </ul>
        </div>
    );
}