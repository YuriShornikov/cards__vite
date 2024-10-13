import React from 'react';
import './Cards.css';

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  link: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt='Image cap', title, link, children }) => {
  return (
    <div className='card'>
      {imageSrc && (
        <img src={imageSrc} className='card-img-top' alt={imageAlt || 'Card image'} />
      )}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{children}</p>
        <a href={link} className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;
