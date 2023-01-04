import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { SimpleFormWithCustomHooks } from './02-useEffect/SimpleFormWithCustomHooks';
import { MultipleCustoomHook } from './03-examples/MultipleCustoomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustoomHook />
  </React.StrictMode>
)
