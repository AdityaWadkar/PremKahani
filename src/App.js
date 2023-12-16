import './App.css';
import Navbar from "./WeddingContainer/Navbar/Navbar"
import Footer  from "./WeddingContainer/Footer/Footer"
import Sections from './WeddingContainer/Sections/Section';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <Sections/>
      <Footer/>
    </div>
  );
}

export default App;
