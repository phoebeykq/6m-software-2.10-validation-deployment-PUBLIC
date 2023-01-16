import "./App.css"; 

import SimpleForm from "./components/SimpleForm"; 

import { process } from "joi-browser"; 

function App() {
    return (
        <>
        <div className="App">
            <SimpleForm/>
            <h3>{process.env.REACT_APP_MESSAGE}</h3>
        </div>
        </>
    )
}

export default App; 