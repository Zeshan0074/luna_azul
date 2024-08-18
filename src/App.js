import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import About from './components/home/About';
import HeroSection from './components/home/HeroSection';
import LuxuryAppartements from './components/home/LuxuryAppartements';
import Wavecomponent from './components/home/Wavecomponent';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Wavecomponent/>
      <LuxuryAppartements/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
