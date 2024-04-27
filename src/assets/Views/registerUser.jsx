import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate do React Router
import { register } from "../../services/register";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Estado para controlar a mensagem de sucesso
  const navigate = useNavigate(); // Obtendo a função de navegação do React Router

  const handleLoginClick = async () => {
    try {
      setLoading(true);

      const formData = {
        username: username,
        email: email,
        password: password,
      };

      const response = await register(formData);

      if (response.success) {
        console.log("Cadastro bem-sucedido:", response.data);
        setSuccessMessage("Cadastro realizado com sucesso!"); // Definindo a mensagem de sucesso
        navigate("/home"); // Redirecionando para "/home" após o login bem-sucedido
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      setErrorMessage("Erro ao fazer cadastro. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <form>
            <h1 style={{ textAlign: "center" }}>Cadastro de Usuário</h1>
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
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}

            {/* Exibindo a mensagem de sucesso */}
            <button type="button" onClick={handleLoginClick} disabled={loading}>
              {loading ? "Carregando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
