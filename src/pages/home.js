import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import authContext from '../context/authContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(props){

    const subjectsData=["Biology","Physics","Chemistry","Mathemathics"]
    const context = useContext(authContext)
    const { loginState } = context
    const [userDetails, setUserDetails] = useState({ name: " ", class: " ", roll: " "})
    const navigate = useNavigate()
    const subjects= subjectsData.map((val)=>{
        return (      
            <div className="sub">
            <h3>{val} <ArrowForwardIcon fontSize="small"/></h3>
       </div>     
    )
    })

    useEffect(() => {
        if (loginState) {
            const getUser = async (navigate) => {
                const response = await fetch(`http://localhost:5000/api/auth/getStudent`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
                    },
                })
                const json = await response.json()
                if (json.error) {
                    localStorage.removeItem('token')
                    console.clear()
                    navigate('/')
                }
                else {
                    setUserDetails(json)
                }
            }
            getUser(navigate)
        }
    }, [loginState, navigate])

    return(
        <div className='home'>
            <div className='left-home'>
           <img className='home-face' src={props.pic} alt=""/>
           
           <div className='home-desc'>
               <h2 className='home-name'>{userDetails.name}</h2>
               <h3>Class: {userDetails.class}</h3>
               <h3>Roll number: {userDetails.roll} </h3>
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