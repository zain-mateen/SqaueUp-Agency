import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
// import ServicesPage from './components/ServicesPage/ServicesPage';
// import BlogPage from './components/BlogPage/BlogPage';
// import ProcessPage from './components/ProcessPage/ProcessPage';
// import AboutUsPage from './components/AboutUsPage/AboutUsPage';
// import CareerPage from './components/CareerPage/CareerPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/service-page' element={<ServicesPage />} />
        <Route path='blog-page' element={<BlogPage />} />
        <Route path='process-page' element={<ProcessPage />} />
        <Route path='about-page' element={<AboutUsPage />} />
        <Route path='career-page' element={<CareerPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
