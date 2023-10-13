import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'
import FourthPage from './pages/Fourth'
import Nav from './components/Nav/Nav'
import ScrollToTop from './components/Scroll/ScrollToTop';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<FourthPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
