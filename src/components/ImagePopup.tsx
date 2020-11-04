import React from 'react';

import '../styles/ImagePopup.css';
import { IImagePopup } from '../interfaces';

const ImagePoup = ({ urlImage, onClose }: IImagePopup) => {
  return (
    <div className={`image-popup__wrapper ${!!urlImage ? 'open' : 'close'}`}>
      <div className="image-popup__modal-content">
        <span className="image-popup__button-close" onClick={onClose}>&times;</span>
        <img src={urlImage} alt="image modal"/>
      </div>
    </div>
  );
};

export default ImagePoup;
