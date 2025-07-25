import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Favorites from './pages/favorite/index';
import Details from './pages/details/index'

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe-items/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
