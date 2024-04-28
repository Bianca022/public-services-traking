import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CardPubli from "../components/CardPubli";

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <h2 className="title">Relate um problema através de um post</h2>
          <button className="button-main">
            <Link to="/registerPubli"> Compartilhar algo...</Link>
          </button>
          <CardPubli />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
