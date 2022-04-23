import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react'
import {SidebarData} from './Data-sidebar.js'
import '../App.css'


export default function Sidebar(){

    
    return (
        
           <div className='Sidebar'>
            <div className='sbtitle'>
               <DashboardIcon/>
               <p>Dashboard</p>
            </div>
            <ul className='sblist'>
                {SidebarData.map((val,key) =>{
                   return(
                       <li className='sbrow' key={key}
                        id={window.location.pathname===val.link?"active":""}
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
            <footer className='sbfooter'>
            <small>&#169;Pathshala 2022</small>
            <small>All rights reserved </small>
            </footer>
        </div>
       
    );
}