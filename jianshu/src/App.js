import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App(props) {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/detail' exact component={Detail}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;