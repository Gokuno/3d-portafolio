import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex space-x-4" style={{ pointerEvents: 'auto' }}>
      <a href="https://github.com/Gokuno" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaGithub size={28} />
      </a>
      <a href="https://www.linkedin.com/in/jorge-allan-paz-garza/m" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaLinkedin size={28} />
      </a>
      
    </div>
  );
}

export default Socials;