import React, { useState } from "react";
import rua from "../img/rua.jpg";
import green from "../icon/circle-green.png";
import red from "../icon/circle-red.png";
import buttonCard from "../icon/button-card.png";
import { Link } from "react-router-dom";

function CardPubli() {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  return (
    <>
      <div className="card">
        <img src={rua} alt="" height="350" width="100%" />
        <div className="card-body">
          <div className="card-align-list">
            <h3>Sed ut perspiciatis unde omnis</h3>
            <button
              className="button-list"
              onClick={() => setMostrarOpcoes(!mostrarOpcoes)}
            >
              <img src={buttonCard} alt="" width={24} height={24} />
            </button>
            {mostrarOpcoes && (
              <div className="drop">
                <button onClick={() => console.log("Editar")}>
                  <Link to="/EditPubli">Editar</Link>
                </button>
                <button onClick={() => console.log("Excluir")}> Excluir</button>
              </div>
            )}
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>
          <button className="card-button">
            <div className="card-button-green">
              <img src={green} alt="" width={25} /> <p>600</p>
            </div>
          </button>
          <button className="card-button">
            <div className="card-button-red">
              <img src={red} alt="" width={25} /> <p>600</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardPubli;
