import React from "react";
import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";

import { styles } from "../styles";
import { FaFacebook, FaGlobe } from 'react-icons/fa';
import { SectionWrapper } from "../hoc";
import { webdesign } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const WebCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#232426] p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[430px]">
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
          <div className="flex flex-row gap-3 pr-11">
          <a href="https://www.facebook.com/1UPWebDesigns" target="_blank" rel="noopener noreferrer" className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <FaFacebook size={30} />
            </a>
            <a href="https://1upwebdesigns.com" target="_blank" rel="noopener noreferrer" className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <FaGlobe size={30} />
            </a>
          </div>
      
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Webdesign = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Tambien hago
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Otros trabajos.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En 1UP Web Designs es donde he realizado muchos de mis trabajos para clientes, visita la pagina para ver mas sitios web que he diseñado y desarrollado para distintos negocios.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {webdesign.map((webdesign, index) => (
          <WebCard 
            key={`project-${index}`}
            index={index}
            {...webdesign}
          />
        ))}
      </div>
    </>
  )
}


export default SectionWrapper(Webdesign, "")