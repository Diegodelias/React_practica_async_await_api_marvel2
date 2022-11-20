import React from "react";
import  { motion } from "framer-motion";
const Foto = ({ id, title, path, extension,formatoapi }) => {
  return (
    <motion.div  layout className="tarjeta"
    animate={{ opacity: 1}}
    initial={{ opacity: 0}}
    exit={{ opacity: 0 }}   >

      <h2>{title}</h2>
      <h3>{formatoapi}</h3>
      <img src={`${path}.${extension}`} />
       
    </motion.div>
  );
};

export default Foto;
