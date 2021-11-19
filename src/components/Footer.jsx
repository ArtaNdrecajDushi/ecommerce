import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';


const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
     <AiOutlineCopyright className="copy"/> 
     
     <p>{date} Arta Ndrecaj Dushi</p>
     <div className="icons">
     
      </div>
    </footer>
  );
};

export default Footer;
