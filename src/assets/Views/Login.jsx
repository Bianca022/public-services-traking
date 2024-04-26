function Login() {
  return (
    <>
      <div className="body">
        <div className="container">
          <form action="">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="flex-colum">
              <label htmlFor="title">E-mail:</label>
              <input type="email" />
            </div>
            <div className="flex-colum">
              <label htmlFor="title">Senha:</label>
              <input type="senha" />
            </div>
            <button>Editar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
