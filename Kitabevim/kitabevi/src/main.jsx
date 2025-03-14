import { StrictMode } from 'react'
import { Provider } from "react-redux";
import store from "./redux/store"; // store'un yolunu kontrol et

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
