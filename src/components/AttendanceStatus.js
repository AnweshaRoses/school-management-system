import React from 'react'

export default function AttendanceStatus({monthlyPresent}) {
  const monthlyAttendancePercent=Math.round((monthlyPresent/26)*100)
  return (
    <div className="attendance-status">
       <label for="monthly-attendance-stat">Student has attended {monthlyAttendancePercent}% on the month</label>
      <progress id="monthly-attendance-stat" value={monthlyAttendancePercent} max="100"> {monthlyAttendancePercent}% </progress> 
    </div>
  )
}
