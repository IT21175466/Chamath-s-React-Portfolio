import './App.css';
import { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";

function App() {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
      <>
        <Header />
        <main>
            <Hero />
            <Services />
        </main>
        <Footer/>
      </>
      );

}

export default App;
