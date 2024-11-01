import './App.css';
import NavBar from './components/Navbar.jsx';
import Inicio from './components/Inicio.jsx';
import Curriculum from './components/Curriculum.jsx';
import Linkedin from './components/Linkedin.jsx';
import Entrevistas from './components/Entrevistas.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <Curriculum/>
      <Linkedin/>
      <Entrevistas/>
      <Footer/>
    </div>
  );
}

export default App;
