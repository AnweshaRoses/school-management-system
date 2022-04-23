import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import AttendanceIcon from '@mui/icons-material/CoPresent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Festival';
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
      title:"Events",
      icon:<EventIcon/>,
      link:"/Events"
   },
     {
        title:"Calender",
        icon:<CalendarMonthIcon/>,
        link:"/calender"
     }
 ]
  
 

 export const EventsData = [

   {
       title:"Sports Day",
       date:"12th August 2022",
       line1:"Sports day of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
       line2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam",
       img:"https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg"
    },

    {
      title:"Home",
      date:"12th August 2022",
      line1:"hello",
      line2:"world",
      img:""
   },

   {
      title:"Home",
      date:"12th August 2022",
      line1:"hello",
      line2:"world",
      img:""
   },

   {
      title:"Home",
      date:"12th August 2022",
      line1:"hello",
      line2:"world",
      img:""
   }
    
]

// export const subjectsData = [
//      "biology",
//      "chemistry",
//      "physics",
//      "maths"
// ]
