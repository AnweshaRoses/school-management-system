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
        link:"/Home"
     },
     {
        title:"Results",
        icon:<QuizIcon/>,
        link:"/Results"
     },
     {
      title:"Events",
      icon:<EventIcon/>,
      link:"/Events"
   },
   {
        title:"Calender",
        icon:<CalendarMonthIcon/>,
        link:"/Calender"
    },
   {
      title:"Login",
      icon:<AttendanceIcon/>,
      link:"/Login"
   },
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

 export const EventsData = [

   {
       title:"Sports Day",
       date:"29th August 2022",
       line1:"National Sports Day is celebrated every year in India on 29 August. The day is celebrated to commemorate the birth anniversary of Indian hockey legend, Major Dhyan Chand.",
       line2: "schools choose to offer medals or prizes to the winners of the various events, but for others, participation is its own reward.",
       img:"https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg"
    },

    {
      title:"Annual Day",
      date:"12th September 2022",
      line1:"Annual day celebrations bring out the creative best in students.",
      line2:"On the occasion, the Classical Duet Dance brought out the talents of the School students. And the debate on the topic “Has technology made the young less creative and more alone?” gave the young debaters a great opportunity to showcase their literary talents.",
      img:"https://www.dailyexcelsior.com/wp-content/uploads/2019/03/page10-6-1.jpg"
   },

   {
      title:"Model United Nations",
      date:"12th August 2022",
      line1:"These are powerful networks that can open up many opportunities to collaborate, partner and work together in the future,",
      line2:"it is extremely beneficial for ‘communication skills, writing skills, negotiation skills, and public speaking",
      img:"https://img.theweek.in/content/dam/week/leisure/society/images/2018/11/1/mun-1.jpg"
   },

   {
      title:"Grandparents' Day",
      date:" 11th September 2022",
      line1:"Children have an opportunity to show their appreciation and love toward their grandparents (and other special older adult friends), and grandparents feel valued as their role is validated.      ",
      line2:"You can learn a lot more from grandparents than you think you can – and it's not a chore.",
      img:"https://blog.fnp.com/wp-content/uploads/2019/08/27th-Aug-3-3-810x420.png"
   }
    
]

// export const subjectsData = [
//      "biology",
//      "chemistry",
//      "physics",
//      "maths"
// ]

