import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import { HookApp } from './HookApp'
// import { Memorize } from './05-memos/Memorize'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MemoHook } from './05-memos/MemoHook'
// import { CallBackHook } from './05-memos/CallBackHook'
// import { Padre } from './06-tarea-memo/Padre'
// import './07-useReducer/intro-reducer'
// import { TodoApp } from './07-useReducer/TodoApp'
import './index.css'
import { MainApp } from './08-useContext/MainApp'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>
)
// BrowserRouter: Higher Order Component, componente que recibe otro componente. Me permite que todos los componentes que estén dentro de BrowserRouter tengan acceso a las rutas.