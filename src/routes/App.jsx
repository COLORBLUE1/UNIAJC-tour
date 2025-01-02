import SplashScreen from '../pages/SplashScreen';
import Home from '../pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<SplashScreen />} />
        <Route path="/Home" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
