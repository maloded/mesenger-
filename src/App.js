import './App.css';
import Header from "./components/Header/Header";
import Sitebar from "./components/Sitebar/Sitebar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Sitebar />
            <Content dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>
        </div>
    );
}

export default App;
