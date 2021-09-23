import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;