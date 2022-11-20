import { useEffect } from "react";

function Filtro({ resultado, setfiltrado, formato, setFormato }) {
  return (
    <div className="contenedor-filtro">
      <button className={formato === " " ? "active" : ""} onClick={() => setFormato("")}>Todos los formatos</button>
      <button className={formato === "Comic" ? "active" : ""} onClick={() => setFormato("Comic")}>Comic</button>
      <button className={formato === "Trade Paperback" ? "active" : ""} onClick={() => setFormato("Trade Paperback")}>
        Trade Paperback
      </button>
      <button className={formato === "Digital Vertical Comic" ? "active" : ""} onClick={() => setFormato("Digital Vertical Comic")}>
        Digital Vertical Comic
      </button>
    </div>
  );
}

export default Filtro;
