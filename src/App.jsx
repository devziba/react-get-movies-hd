import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import Navbar from "./components/NavBar";
import "./App.css"
import MoviesStore from "./store/MoviesContext";
function App()
{
  return(
    <MoviesStore>
        <div className="container1">
      <Navbar></Navbar>
      <Body></Body>
    </div>
    </MoviesStore>
    
  )
}
export default App;