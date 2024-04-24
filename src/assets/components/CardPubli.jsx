import rua from "../img/rua.jpg";

function CardPubli() {
  return (
    <>
      <div className="card">
        <img src={rua} alt="" height="350" width="100%" />
        <div className="card-body">
          <h3>Sed ut perspiciatis unde omnis</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>
          <button>510</button>
          <button>600</button>
        </div>
      </div>
    </>
  );
}

export default CardPubli;
