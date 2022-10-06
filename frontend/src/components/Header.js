import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Header() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>

        {user ? (
          <li><span onClick={logoutUser}>Sair</span></li>
        ) : (
          <>
            <li><Link to="/login">Entrar</Link></li>
            <li><Link to="/register">Cadastrar</Link></li>
          </>
        )}

        {user && <li>Bem-vindo, {user.username}</li>}
      </ul>
    </div>
  );
};

export default Header;
