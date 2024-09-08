import Navbar from "./components/navbar";
import image from "./assets/logo.png";
import "./index.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className='nav'>
        <Navbar image={image}/>
        <Footer/>
      </div>

    </>
  );
}

export default App;