import { Outlet  } from 'react-router'
import Header from './components/Header/Header'
const students = [
  {id:1, name:"Andrea", classRoom:"A"}
  ,{id:2, name:"Bertha", classRoom:"A"}
  ,{id:3, name:"Carlos", classRoom:"B"}
  ,{id:4, name:"Dennis", classRoom:"A"}
  ,{id:5, name:"Einar", classRoom:"B"}
];
function App() {

  return (
    <>
      <Header/>
      < Outlet context={{students:students, }}/>
    </>
  )
}

export default App
