import classes from "./Content.module.css";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Users from "./Users/Users";
import {Route} from "react-router-dom";


const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={ () => <Profile />} />
            <Route path="/dialogs" render={ () => <Dialogs dialogsPage={props.dialogsPage} dispatch={props.dispatch}  />} />
            <Route path="/users" render={ () => <Users />} />
        </div>
    );
}

export default Content;