import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import avatarReducer from "./Features/avatarSprite";
import settingReducer from "./Features/gameSettings";
import userReducer from "./Features/userReducer";

const store = configureStore({
    reducer: {
        avatar: avatarReducer,
        setting: settingReducer,
        user: userReducer
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