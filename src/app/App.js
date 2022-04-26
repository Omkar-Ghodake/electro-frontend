import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from '../layouts/Navbar';
import TopBar from '../layouts/TopBar';
import Home from '../pages/Home';
import Footer from '../layouts/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <TopBar />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
