import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux elements
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import avatarReducer from "./Features/avatarSprite";
import settingReducer from "./Features/gameSettings";
import userReducer from "./Features/userReducer";

// Websockets
import actionCable from 'actioncable';

const store = configureStore({
    reducer: {
        avatar: avatarReducer,
        setting: settingReducer,
        user: userReducer
    }
});

// Create POST request on homeroom, grab the id from the homeroom, pass id to private room
// ActionCable
const CableApp = {};
CableApp.cable = actionCable.createConsumer("http://sketch-io.vercel.app");
export const ActionCableContext = createContext();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
           <ActionCableContext.Provider value={CableApp.cable}>
               <App />
            </ActionCableContext.Provider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);