let rerender = () => {}

let state = {
    profilePage: {},
    dialogsPage: {
        messages: [{message: "Hi!", id: 1}, {message: "Who are you?", id: 2}],
        newMessageText: '',
        dialogs: [{name: "Alexey", id: 1}, {name: "Sveta", id: 2}]
    }
}

export let addMessage = () => {
    let newMessagePage = {
        message: state.dialogsPage.newMessageText,
        id: 3
    };
    state.dialogsPage.messages.push(newMessagePage);
    state.dialogsPage.newMessageText = '';
    rerender()

}

export let updateNewMessageText = (someText) => {
    state.dialogsPage.newMessageText = someText;
    rerender()
};


export const subscribe = (obs) => {
    rerender = obs
}

export default state;

