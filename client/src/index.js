import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import avatarReducer from "./Features/avatarSprite";

const store = configureStore({
    reducer: {
        avatar: avatarReducer,
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);