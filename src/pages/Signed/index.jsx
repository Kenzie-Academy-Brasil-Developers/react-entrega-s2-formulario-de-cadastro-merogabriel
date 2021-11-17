import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

const Signed = () => {
  const history = useHistory();

  const { user } = useParams();

  if (user === undefined) {
    history.push("/");
  }

  return (
    <div className="signed">
      <h1>Bem-vindo {user}!</h1>
      <button>
        <Link to="/" className="link">
          Voltar!
        </Link>
      </button> 
    </div>
  );    
};

export default Signed;
