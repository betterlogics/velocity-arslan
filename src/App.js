
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer2/Footer2';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutmain from './Components/Aboutmain';
import Homemain from './Components/Homemain';
import Whymain from './Components/Whymain';
import Privacymain from './Components/Privacymain';
import Servamain from './Components/Servamain';
import Membermain from './Components/Membermain';
import Contactmain from './Components/Contactmain';
import Gallerymain from './Components/Gallerymain';
import Blogmain from './Components/Blogmain';
import Classmain from './Components/Classmain';
function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route exact path="/" element={<Homemain/>}/>
    <Route exact path="/Aboutmain" element={<Aboutmain/>}/>
    <Route exact path="/Whymain" element={<Whymain/>}/>
    <Route exact path="/Privacymain" element={<Privacymain/>}/>
    <Route exact path="/Servamain" element={<Servamain/>}/>
    <Route exact path="/Membermain" element={<Membermain/>}/>
    <Route exact path="/Contactmain" element={<Contactmain/>}/>
    <Route exact path="/Gallerymain" element={<Gallerymain/>}/>
    <Route exact path="/Blogmain" element={<Blogmain/>}/>
    <Route exact path="/Classmain" element={<Classmain/>}/>
  </Routes>
  <Footer/>
  <Footer2/>
</Router>
    </div>
  );
}

export default App;
