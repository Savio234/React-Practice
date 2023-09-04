import { Routes, Route } from 'react-router-dom';
import Home from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
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
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
