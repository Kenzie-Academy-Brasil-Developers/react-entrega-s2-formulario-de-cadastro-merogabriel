import { Link } from "react-router-dom";

const Signed = ({ user }) => {
  return (
    <div className="signed">
      <h1>Bem-vindo {user}!</h1>
      <button>
        <Link to="/" className='link'>Voltar!</Link>
      </button>
    </div>
  );
};

export default Signed;
