import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import InputMessageForm from "./InputMessageForm/InputMessageForm";





const Dialogs = (props) => {

    let dialogsElements =  props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} />)

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.input}>
                <InputMessageForm newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default Dialogs;