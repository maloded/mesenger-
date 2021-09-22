import classes from "./Sitebar.module.css";
import Navbar from "./Navbar/Navbar";

const Sitebar = (props) => {
    return (
        <div className={classes.sitebar}>
            <Navbar />
        </div>
    );
}

export default Sitebar;