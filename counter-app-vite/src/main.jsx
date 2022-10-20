import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "../src/components/CounterApp";
import { FirstApp } from '../src/components/FirstApp';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10}/>
    {/* <FirstApp title="Hola soy Thamara" /> */}
  </React.StrictMode>
);
