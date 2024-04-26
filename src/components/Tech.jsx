import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';

import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Software developer with experience in Python, JavaScript, SQL, ChatGPT and others.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((technologies, index) => (
          <div key={index} className="w-16 h-16">
            {/* Render the image directly */}
            <img src={technologies.icon} alt={technologies.title} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </>
    //   <div>About</div>
  );
};

export default SectionWrapper(About, "about");