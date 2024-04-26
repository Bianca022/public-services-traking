import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EditPubli() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <form action="">
            <h1>Editar publicação</h1>
            <div className="flex-colum">
              <label htmlFor="">Adicionar imagem: </label>
              <input type="file" />
            </div>
            <div className="flex-colum">
              <label htmlFor="title">Título:</label>
              <input type="text" />
            </div>
            <div className="flex-colum">
              <label htmlFor="description">Descrição:</label>
              <textarea name="" id="" cols={30} rows={5}></textarea>
            </div>
            <button>Editar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditPubli;
