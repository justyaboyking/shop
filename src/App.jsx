import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  color: black;
`;

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppContainer>
  );
}