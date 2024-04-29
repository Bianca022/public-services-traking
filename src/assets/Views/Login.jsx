import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate do React Router
import { login } from "../../services/login";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Obtendo a função de navegação do React Router

  const handleLoginClick = async () => {
    try {
      setLoading(true);

      const formData = {
        username: username,
        email: email,
        password: password,
      };

      const response = await login(formData);

      if (response.success) {
        console.log("Login bem-sucedido:", response.data);
        navigate("/home"); // Redirecionando para "/home" após o login bem-sucedido
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Erro ao fazer login. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <form>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="flex-colum">
              <label htmlFor="username">Nome de usuário:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex-colum">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-colum">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button type="button" onClick={handleLoginClick} disabled={loading}>
              {loading ? "Carregando..." : "Login"}
            </button>
            <a href="/registerUser">Realizar cadastro</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
