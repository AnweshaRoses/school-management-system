import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import AttendanceIcon from '@mui/icons-material/CoPresent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react"

 export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
     },
     {
        title:"Results",
        icon:<QuizIcon/>,
        link:"/results"
     },
     {
        title:"Attendance",
        icon:<AttendanceIcon/>,
        link:"/attendance"
     },
     {
        title:"Calender",
        icon:<CalendarMonthIcon/>,
        link:"/calender"
     }
 ]
 export const marksData = [
   {
     exam: 'FA 1',
     marks: 89,
    
   },
   {
     exam: 'SA 1',
     marks: 63,
    
   },
   {
     exam: 'FA 2',
     marks: 94,
    
   },
   {
     exam: 'SA 2',
     marks: 43,
    
   },


 ];
      
