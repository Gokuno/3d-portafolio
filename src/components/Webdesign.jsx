import React from "react";
import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
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
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
           <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p> 
          ))}
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
          Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a los repositorios de código y demostraciones en vivo. Reflejan mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.
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