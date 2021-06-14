import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/login";

function App(props) {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/detail/:id' exact component={Detail}/>
                    <Route path='/login' exact component={Login}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;