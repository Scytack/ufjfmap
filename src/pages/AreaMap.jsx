import { useParams } from "react-router-dom";
import { areas } from "../data/areas";
import "../App.css";

function AreaMap() {
  const { id } = useParams();

  const area = areas.find((a) => a.id === id);

  if (!area) {
    return <h2>Área não encontrada</h2>;
  }

  return (
    <div>

      <h1>{area.nome}</h1>

      <p>{area.descricao}</p>

      <div style={{
        height:"400px",
        border:"2px dashed gray",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        Mapa interativo da área (em breve)
      </div>

    </div>
  );
}

export default AreaMap;