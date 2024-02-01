import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'
import FourthPage from './pages/Fourth'
import State from './pages/state';
import Nav from './components/Nav/Nav'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<FourthPage />} />
        <Route path='/state' element={<State />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
