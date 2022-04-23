import React from 'react';
import { useState, useEffect} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
export default function App() {
  const [dateNow,setDate]=useState(new Date())
  useEffect(()=>{
    addAttendanceTiles()
    document.querySelectorAll(".react-calendar__navigation__next-button,.react-calendar__navigation__prev-button").forEach((monthChanger)=>{
    })
  })
  function addAttendanceTiles(){
    try{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName=months[dateNow.getMonth()]
    fetch(`https://pratik-karale.github.io/json-files/attendance/months/${currentMonthName.toLowerCase()}.json`).then(r=>r.json()).then((data)=>{
      for(const currentDate of data.days){
        document.querySelector(`[aria-label="${currentMonthName} ${currentDate}, ${dateNow.getFullYear()}"]`).parentElement.classList.add("react-calendar__tile--active")
      }
      return currentMonthName
    }).then((monthName)=>{
      document.querySelector(`[aria-label="${monthName} 1, ${dateNow.getFullYear()}"]`).parentElement.classList.remove("react-calendar__tile--active")
    }).catch(()=>{})}catch(err){}
  }

  return (
            <div className='calender-envelope'>
                <div className='header'>
         <h1>Calender</h1>
          </div>
       <div className='calendar-container'>
            <Calendar onChange={setDate} value={dateNow}  onActiveStartDateChange={({ action, activeStartDate, value, view })=>{
         if(view=="month"){
           setDate(activeStartDate)
           addAttendanceTiles()
         }
       }}/>
        
       </div>
            </div>
         
  );
}
