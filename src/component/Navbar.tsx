import {  NavLink } from "react-router-dom"

const Navbar = () =>{
    return<>
    <nav className="max-w-sm mx-auto my-5">
        <ul className="flex items-center justify-between">
            <li className="hover:text-indigo-600 duration-200 font-medium" >
                <NavLink to="/">Home</NavLink>
            </li>
                <li className="hover:text-indigo-600 duration-200 font-medium">
                    <NavLink to="/Contact">Contact</NavLink>
            </li>
                <li className="hover:text-indigo-600 duration-200 font-medium">
                <NavLink to="/about">About Us</NavLink>
            </li>

                <li className="hover:text-indigo-600 duration-200 font-medium">
                <NavLink to="/learn">Learn</NavLink>
            </li>

                <li className="hover:text-indigo-600 duration-200 font-medium">
                    <NavLink to="/contribute">Contribute</NavLink>
            </li>

                <li className="hover:text-indigo-600 duration-200 font-medium">
                    <NavLink to="/login">Login</NavLink>
            </li>

            
        </ul>
    </nav>
    </>

}

export default Navbar