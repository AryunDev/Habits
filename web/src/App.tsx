import './styles/global.css';

import { Habit } from "./component/Habit"


function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
    </div>
  )
}

export default App

// Componente: Reaprobechar / Aislar
// PRopiedad: Una información enviada para modificar un componente 
//        De manera visual o comportamental