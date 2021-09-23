import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import InputMessageForm from "./InputMessageForm/InputMessageForm";

let messages = [
    {message: "Hi!", id: 1},
    {message: "Who are you?", id: 2}
]


let dialogs = [
    {name: "Alexey", id: 1},
    {name: "Sveta", id: 2}
]

let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

let messagesElements = messages.map(m => <MessageItem message={m.message} />)

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.input}>
                <InputMessageForm/>
            </div>
        </div>
    );
}

export default Dialogs;