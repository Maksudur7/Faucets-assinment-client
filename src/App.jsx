import { Outlet } from "react-router-dom"
import Faucest from "./Pages/Faucest"


function App() {


  return (
    <>
      <Faucest></Faucest>
      <Outlet></Outlet>
    </>
  )
}

export default App
