import React, { useState, useEffect } from "react";
import Foto from "./Foto";
import Filtro from "./Filtro";
import { motion, AnimatePresence } from "framer-motion";

const Paginado = () => {
  const [resultado, setResultado] = useState([]);
  const [filtrado, setfiltrado] = useState([]);
  const [formato, setFormato] = useState("");
  const PUBLIC_KEY = "";
  const PRIVATE_KEY = "";
  const ts = 1;
  const hash = "";

  useEffect(() => {
    fetchData();
  }, []);

  const funcionFiltrar = (tipo) => {
    let copiaResultado = resultado;
    if (tipo !== "") {
      let res = copiaResultado.filter((elemento) => elemento.format === tipo);
      setfiltrado(res);
    } else {
      setfiltrado(resultado);
    }
  };

  useEffect(() => {
    funcionFiltrar(formato);
  }, [formato]);

  const generarOffset = () => {
    let random = Math.random() * (1500 - 1) + 1;
    return random;
  };

  const offset = generarOffset();
  // console.log(resultado);
  console.log(process.env);

  //use effect vinculado a  cambio formato
  // si fotmato "" no filtarar si es comic filtrar
  const fetchData = async () => {
    const respuesta = await fetch(
      // `https://gateway.marvel.com/v1/public/comics?offset=${offset}&limit=50&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      `https://gateway.marvel.com/v1/public/comics?offset=${offset}&limit=50&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );
    const data = await respuesta.json();
    setResultado(data.data.results);
    setfiltrado(data.data.results);
  };

  return (
    <div>
      <Filtro
        resultado={resultado}
        setfiltrado={setfiltrado}
        formato={formato}
        setFormato={setFormato}
      />
      <motion.div layout className="personajes">
        <AnimatePresence>
          {filtrado.map((superheroe) => (
            <Foto
              id={superheroe.id}
              title={superheroe.title}
              path={superheroe.thumbnail.path}
              extension={superheroe.thumbnail.extension}
              key={superheroe.id}
              formatoapi={superheroe.format}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Paginado;
