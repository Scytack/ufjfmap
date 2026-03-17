import { Link } from "react-router-dom";
import { areas } from "../data/areas";
import mapaUFJF from "../assets/mapaufjf.png";
import "../App.css";


function Home() {
  return (
    <div>

      <h1>UFJFMap</h1>
      <p>Mapa digital da Universidade Federal de Juiz de Fora</p>

      <img src={mapaUFJF} alt="Mapa UFJF" style={{width:"80%"}} />

      <h2>Áreas da Universidade</h2>

      <div className="grid-areas">
        {areas.map((area) => (
          <Link key={area.id} to={`/area/${area.id}`}>
            <button className="area-btn">
              {area.nome}
            </button>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Home;