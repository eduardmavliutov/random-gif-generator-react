import React from 'react';
import classes from './ImageCard.module.css';
import deleteImageButton from './../../assets/trash-icon.png';

export const ImageCard = (props) => {

  const {src, title, id, timestamp, deleteButtonHandler} = props;


  return (
    <div className={classes.ImageCard}>
      <div className={classes.container}>
        <img 
          id={id}
          src={src}
          alt={title}
        />
        <div className="image-card__delete-image-button-container">
          <img 
            className="delete-image-button"
            src={deleteImageButton}
            onClick={deleteButtonHandler}
            alt="delete-button"
          />
        </div>
      </div>
      <div className={classes.description}>
        <p><strong>{title}</strong></p>
        <time 
          date={new Date(timestamp).toLocaleString()} 
        >{timestamp}
        </time>
      </div>
    </div>
  )
}