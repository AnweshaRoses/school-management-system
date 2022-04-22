import React from 'react'
import './App.css';
import Carousel from './components/Carousel'
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Carousel name="pratik"/>
    </div>
  )
}

// name='abc'