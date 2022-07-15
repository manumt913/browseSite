import { Navigate, Route, Routes } from 'react-router-dom';
import Browse from './Components/Sections/Browse';
import Layout from './Components/Layout/Layout';
import Home from './Components/Sections/Home';
import Checkout from './Components/Sections/Checkout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
