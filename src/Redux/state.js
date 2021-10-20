import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {},
        dialogsPage: {
            messages: [{message: "Hi!", id: 1}, {message: "Who are you?", id: 2}],
            newMessageText: '',
            dialogs: [{name: "Alexey", id: 1}, {name: "Sveta", id: 2}, {name: "Pasha", id: 3}]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this._callSubscriber()
        }
}

export default store;

