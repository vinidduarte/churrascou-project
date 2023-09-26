import { Routes, Route } from 'react-router-dom';
import InitialPage from '../components/InitialPage';
import CustomerInfo from '../components/CustomerInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <InitialPage /> } />
      <Route path="/churrascou" element={ <CustomerInfo /> } />
    </Routes>
  );
}

export default App;
