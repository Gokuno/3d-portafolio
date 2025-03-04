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
        Estas son algunas de las tecnologias con las que he trabajado en los proyectos que he realizado.
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