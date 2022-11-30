import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
import './index.css';
// import { HooksApp } from './HooksApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHooks />
  </React.StrictMode>
)
