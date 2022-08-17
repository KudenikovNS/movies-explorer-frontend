import "./Preloader.css";

import React from "react";

const Preloader = ({ isWaiting }) => {
  const preloaderChangeClass = `preloader ${isWaiting && "preloader_active"}`;

  return (
    <div className={preloaderChangeClass}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
};

export default Preloader;
