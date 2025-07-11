import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import "./App.css"
import MoviesStore from "./store/MoviesContext";
import { Outlet } from "react-router-dom";
function App()
{
  return(
    <MoviesStore>
        <div className="container1">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    </MoviesStore>
    
  )
}
export default App;