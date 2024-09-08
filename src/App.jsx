import Navbar from "./Components/Navbar";
import image from "./assets/logo.png";
import "./App.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="nav">
        <Navbar image={image} />
        <Footer />
      </div>
    </>
  );
}

export default App;
