import React from 'react';
import './App.css';
import { Marks } from './pages/marks/Marks';
import Sidebar from './components/sidebar';
import Events from './pages/events';
import Login from './pages/login-in';
import Calender from './pages/Calendar';
import Home  from './pages/home';

export default function App(){


  return(

    <div className='App'>
          <Sidebar/>
          <div className='secondary'>
          {(window.location.pathname=="/Events")
              && <Events/>}
           {(window.location.pathname=="/Events")
              && <Events/>}
          {(window.location.pathname=="/results")
              && <Marks/>}
           {(window.location.pathname=="/home")
              && <Home pic='https://media.istockphoto.com/photos/portrait-of-happy-middle-school-boy-picture-id1138949949?k=20&m=1138949949&s=170667a&w=0&h=u2ArzGTmMPObeKDbgGx3Pe7RJMQzXtk_j_JpMc21z5k='
                       name=" Tammy Mishra "
                       class="8"
                       section="E"
                       roll="34567"
                       teacher="John Doe"
              />}
          </div>

    </div>    
    )

}



// import { BrowserRouter as Router, Routes, Route}
// 	from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Login from './pages/login-in';

// function App() {
// return (
// 	<Router>
// 	<Navbar />
// 	<Routes>
// 		<Route exact path='/' exact element={<Home />} />
// 		<Route path='/about' element={<About/>} />
// 		<Route path='/contact' element={<Contact/>} />
// 		<Route path='/blogs' element={<Blogs/>} />
// 		<Route path='/sign-up' element={<SignUp/>} />
// 	</Routes>
// 	</Router>
// );
// }

// export default App;
