import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </nav>
    );
}

export default Navbar;