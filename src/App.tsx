import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ComponentShowcase from './pages/ComponentShowcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
