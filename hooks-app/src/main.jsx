import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { SimpleFormWithCustomHooks } from './02-useEffect/SimpleFormWithCustomHooks';
// import { MultipleCustoomHook } from './03-examples/MultipleCustoomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MainApp />
  /* </React.StrictMode> */
)
