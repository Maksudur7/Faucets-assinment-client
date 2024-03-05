import { Outlet } from "react-router-dom"
import Faucest from "./Pages/Faucest"


function App() {


  return (
    <>
      <div className="container">
        <div>
          <Faucest></Faucest>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default App
