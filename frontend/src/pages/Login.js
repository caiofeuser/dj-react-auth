import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" placeholder="Username" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
