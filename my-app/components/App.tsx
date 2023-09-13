// import InitialPage from './InitialPage';
import { Routes, Route } from 'react-router-dom';
import CustomerInfo from './CustomerInfo';

function App() {
  return (<Routes>
    <Route path="/" element={ <CustomerInfo /> } />
  </Routes>);
}

export default App;
