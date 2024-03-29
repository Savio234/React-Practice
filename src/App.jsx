import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'
import FourthPage from './pages/Fourth'
import State from './pages/state';
import { Nav } from './shared';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Redux from './pages/redux';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<FourthPage />} />
        <Route path='/state' element={<State />} />
        <Route path='/redux' element={<Redux />} />
      </Routes>
      <ScrollToTop />
    </Provider>
  );
}

export default App;
