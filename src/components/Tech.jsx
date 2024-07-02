import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tecnologias con las que he trabajado </p>
        <h2 className={styles.sectionHeadText}>Habilidades.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy ingeniero en Mecatronica especializado en desarrollador de software capacitado con experiencia en JavaScript, y experto en frameworks como React, Node.js, Three.js entre otros. Aprendo rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelvan problemas del mundo real. ¡Trabajemos juntos para dar vida a tus ideas!
      </motion.p>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />

        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");