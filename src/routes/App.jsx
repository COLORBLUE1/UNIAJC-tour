import SplashScreen from '../pages/SplashScreen';
import Home from '../pages/Home';
import Info from '../pages/Info';

import { BrowserRouter, Routes, Route } from 'react-router';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Informacion" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
