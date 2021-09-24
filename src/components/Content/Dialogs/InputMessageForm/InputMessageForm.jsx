import classes from "./InputMessageForm.module.css";
import React from "react";

const InputMessageForm = (props) => {

    let newMessages = React.createRef();

let addMessage = () => {
    props.addMessge();
}

let onPostChange = () => {
    let text = newMessages.current.value;
    props.updateNewMessageText(text);
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