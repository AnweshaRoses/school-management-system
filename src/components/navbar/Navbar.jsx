import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbarwrapper">
                <div className="navleft">
                    <span className='logo'>Patshala</span>
                </div>
                <div className="navright">
                    <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="navavatar" />
                </div>
            </div>
        </div>
    )
}