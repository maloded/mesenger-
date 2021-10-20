import classes from "./InputMessageForm.module.css";
import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../../Redux/dialogs_reducer";

const InputMessageForm = (props) => {

    let newMessages = React.createRef();

let addMessage = () => {
    props.dispatch(addMessageAC());
}

let onPostChange = () => {
    let text = newMessages.current.value;
    let action = updateNewMessageTextAC(text)
    props.dispatch(action);
}

    return (
        <div className={classes.input}>
            <div>
                <textarea onChange={onPostChange} ref={newMessages} value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
}

export default InputMessageForm;