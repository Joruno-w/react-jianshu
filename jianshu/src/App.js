import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Header from "./common/Header";

function App(props) {
    return (
        <Provider store={store}>
            <Header/>
        </Provider>
    );
}

export default App;