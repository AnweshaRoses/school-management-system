import React, { useContext, useEffect, useState } from 'react'
import MarksPieChart from '../../components/MarksPieChart'
import AnnualTestChart from '../../components/AnnualTestChart'
import Featured from '../../components/featured/Featured'
import authContext from '../../context/authContext'
import { useNavigate } from 'react-router-dom'


export default function Marks() {

  const context = useContext(authContext)
  const { loginState } = context
  const [userMarks, setUserMarks] = useState({ math: 0, socialStudies: 0, science: 0, generalKnowledge: 0})
  const navigate = useNavigate()

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
                console.log(json)
                setUserMarks(json)
            }
        }
        getUser(navigate)
    }
}, [loginState, navigate])


  return (
    <div className='marks'>
      <div className='header'>
             <h1>Results</h1>
         </div>
        <Featured math={userMarks.math} socialStudies={userMarks.socialStudies} science={userMarks.science} generalKnowledge={userMarks.generalKnowledge}/>
        <div className='charts'>
        <AnnualTestChart testsData={{"fa-1":89,"sa-2":21,"xa-1":89,"za-2":21}}/>
        </div>
        <MarksPieChart size="500" percentage="85" subject="Maths"/>
    </div>
  )
}
