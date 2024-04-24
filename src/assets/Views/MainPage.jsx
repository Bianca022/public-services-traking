import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardPubli from "../components/CardPubli";

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <h2 className="title">Relate um problema através de um post</h2>
          <button className="button-main">Compartilhar algo...</button>
          <CardPubli />
          <CardPubli />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
