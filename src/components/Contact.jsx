import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange =(e) => {

  }
  const handleSubmit =(e) => {
    
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn('left', 'tween', 0.2, 1)}
       className="flex-[0.75] bg-black p-8"
      >
        <p className={styles.sectionSubText}>Ponte en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Como te llamas?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Correo</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Tu correo electronico?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje o comentario</span>
            <textarea
              rows='7'
              name='name'
              value={form.message}
              onChange={handleChange}
              placeholder="Deja un mensaje o comentario."
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type='submit'
            className="bg-[#1cace0] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")