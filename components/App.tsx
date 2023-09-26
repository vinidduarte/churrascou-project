import { Routes, Route } from 'react-router-dom';
import InitialPage from './InitialPage';
import CustomerInfo from './CustomerInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <InitialPage /> } />
      <Route path="/churrascou" element={ <CustomerInfo /> } />
    </Routes>
  );
}

export default App;
