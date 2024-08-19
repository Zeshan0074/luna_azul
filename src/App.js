import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import About from './components/home/About';
import HeroSection from './components/home/HeroSection';
import HouseCard from './components/home/HouseCard';
import LuxuryAppartements from './components/home/LuxuryAppartements';
import SandWaves from './components/home/SandWaves';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HouseCard/>
      <SandWaves/>
      <LuxuryAppartements/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
