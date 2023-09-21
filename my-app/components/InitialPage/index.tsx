import { Link } from 'react-router-dom';
import './InitialPage.css';

function InitialPage() {
  return (
    <div className="background">
      <div className="div-inicio">
        <p className="title">Tá a fim de churrascar?</p>
        <Link to="/churrascou" className="enter-btn">Clique Aqui </Link>
      </div>
    </div>
  );
}

export default InitialPage;
