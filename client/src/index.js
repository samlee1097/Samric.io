import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import avatarReducer from "./Features/avatarSprite";

// Websockets
import actionCable from 'actioncable';

const store = configureStore({
    reducer: {
        avatar: avatarReducer,
    }
});

console.log(actionCable);

// ActionCable
const CableApp = {};
CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable");
export const ActionCableContext = createContext();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);