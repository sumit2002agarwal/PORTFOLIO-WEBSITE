import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills}  from "./components/Skills";
import { Projects } from "./components/Projects";
import { Cfstat } from "./components/Cfstat";
import { Footer } from "./components/Footer";
import { Aboutme } from "./components/Aboutme";


function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Banner />
      <Aboutme/>
      <Skills />
      <Projects />
      <Cfstat />
      <Footer />
      
    </div>
  );
}

export default App;
