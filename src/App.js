import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './views/Login'
import Translation from './views/Translations'
import Profile from './views/Profile'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/translation" element={ <Translation /> } />
            <Route path="/profile" element={ <Profile /> } /> 
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
