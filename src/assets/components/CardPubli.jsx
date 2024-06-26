import React, { useState, useEffect } from "react";
import rua from "../img/rua.jpg";
import green from "../icon/circle-green.png";
import red from "../icon/circle-red.png";
import buttonCard from "../icon/button-card.png";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/viewPublis";
import { deletePubli } from "../../services/deletePubli";

function CardPubli() {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts();
      console.log(response);
      if (response.success) {
        setPosts(response.data);
      } else {
        console.error(response.message);
      }
    }

    fetchPosts();
  }, []);

  const handleEditClick = (postId) => {
    console.log("ID da publicação para edição:", postId);
    localStorage.setItem("editPostId", postId);
  };

  const handleDeleteClick = async (postId) => {
    try {
      const response = await deletePubli(postId); // Chama a função deletePubli passando o ID da publicação
      if (response.success) {
        // Se a exclusão for bem-sucedida, atualiza a lista de publicações
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        console.error(response.message); // Se houver erro, imprime a mensagem de erro
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const [greenLikes, setGreenLikes] = useState(200);
  const [redLikes, setRedLikes] = useState(120);

  const increaseGreenLikes = () => {
    setGreenLikes(greenLikes + 1);
  };

  const decreaseGreenLikes = () => {
    if (greenLikes > 0) {
      setGreenLikes(greenLikes - 1);
    }
  };

  const increaseRedLikes = () => {
    setRedLikes(redLikes + 1);
  };

  const decreaseRedLikes = () => {
    if (redLikes > 0) {
      setRedLikes(redLikes - 1);
    }
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <img
            src={post.image}
            alt=""
            style={{ objectFit: "cover", width: "100%", maxHeight: "350px" }}
          />

          <div className="card-body">
            <div className="card-align-list">
              <h3>{post.title}</h3>
              <button
                className="button-list"
                onClick={() => setMostrarOpcoes(!mostrarOpcoes)}
              >
                <img src={buttonCard} alt="" width={24} height={24} />
              </button>
              {/* Dropdown de opções */}
              {mostrarOpcoes && (
                <div className="drop">
                  <button onClick={() => handleEditClick(post.id)}>
                    <Link to="/EditPubli">Editar</Link>
                  </button>
                  <button onClick={() => handleDeleteClick(post.id)}>
                    Excluir
                  </button>
                </div>
              )}
            </div>
            <p>{post.content}</p>
            {/* Botões de reações */}
            <button className="card-button" onClick={increaseGreenLikes}>
              <div className="card-button-green">
                <img src={green} alt="" width={25} /> <p>{greenLikes}</p>
              </div>
            </button>
            <button className="card-button" onClick={decreaseRedLikes}>
              <div className="card-button-red">
                <img src={red} alt="" width={25} /> <p>{redLikes}</p>
              </div>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPubli;
