import './App.css';
import Header from "./components/Header/Header";
import Sitebar from "./components/Sitebar/Sitebar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Sitebar />
            <Content />
        </div>
    );
}

export default App;
