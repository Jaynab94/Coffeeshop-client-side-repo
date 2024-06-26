import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <NavLink  to={'/'}>home</NavLink>
            <br />
            <NavLink  to={'/login'}>login</NavLink>
            <br />

            <NavLink  to={'/signup'}>sign up</NavLink>
            <br />

            <NavLink  to={'/users'}>users</NavLink>

            <br />
            <NavLink  to={'/addCoffee'}>updatecoffe</NavLink>
            <br />
            <NavLink  to={'/updateCoffee'}>updatcoffee</NavLink>
            <br />
            <NavLink  to={'/updateNewCoffee'}>coffe</NavLink>
        </div>
    );
};

export default Navbar;