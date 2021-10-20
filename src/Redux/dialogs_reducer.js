const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [{message: "Hi!", id: 1}, {message: "Who are you?", id: 2}],
    newMessageText: '',
    dialogs: [{name: "Alexey", id: 1}, {name: "Sveta", id: 2}, {name: "Pasha", id: 3}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessagePage = {
                message: state.newMessageText,
                id: 3
            };
            state.messages.push(newMessagePage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.someText;
            return state;
        default:
            return state;
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, someText: text})

export default dialogsReducer;