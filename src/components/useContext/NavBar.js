import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to = "/" >UseContext</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName = "active" className="nav-link active" aria-current="page" to = "/">Home</NavLink>
                        <NavLink exact activeClassName = "active" className="nav-link" to = "/about">About</NavLink>
                        <NavLink exact activeClassName = "active" className="nav-link" to = "/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
