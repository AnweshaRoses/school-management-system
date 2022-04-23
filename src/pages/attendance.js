import React, {useState} from 'react'
import AttendanceCalendar from "../components/Calendar"
import AttendanceStatus from "../components/AttendanceStatus"

export default function AttendancePage(){
    const [monthlyPresent,setMonthlyPresent]=useState(0)
  return (
    <div className="attendance-page">
        <h1>Attendance</h1>
        <AttendanceCalendar setMonthlyPresent={setMonthlyPresent}/>
        <AttendanceStatus monthlyPresent={monthlyPresent}/>
    </div>
  )
}
