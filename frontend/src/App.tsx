import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
