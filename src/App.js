import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import BlogPage from './components/BlogPage/BlogPage';
import ProcessPage from './components/ProcessPage/ProcessPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import CareerPage from './components/CareerPage/CareerPage';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='process' element={<ProcessPage />} />
        <Route path='work' element={<BlogPage />} />
        <Route path='career' element={<CareerPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
