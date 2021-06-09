import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => (

        <nav className='bg-purple-600 text-white p-4'>
            <ul className='flex space-x-6 justify-center'>
                <li>
                    <NavLink to="/" activeClassName='border-b-2 border-white'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/rivers" activeClassName='border-b-2 border-white'>List of rivers</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName='border-b-2 border-white'>About</NavLink>
                </li>
            </ul>
        </nav>

);

export default Nav;