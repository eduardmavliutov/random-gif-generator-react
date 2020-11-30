import React from 'react';
import { connect } from 'react-redux';
import classes from './History.module.css';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { withRouter } from 'react-router-dom';
import { deleteImage } from '../../store/image/imageActions';

const History = (props) => {

  const renderImages = () => {
    return props.images.map((image) =>  (
      <ImageCard
        key={image.id}
        deleteButtonHandler={props.deleteImage.bind(null,image.id)}
        {...image}
      />
      )
    )    
  };

  const backButtonHandler = () => {
    props.history.push('/');
  }
  
  return (
    <section className={classes.History}>
      <header>
        <button 
          name="return-to-home-page-button"
          onClick={backButtonHandler}
        > 
          &larr;
        </button>
        <h1>
          History
        </h1>
      </header>
      
      <main>
        { renderImages() }
      </main>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    images: state.image.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteImage: (id) => { dispatch(deleteImage(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(History));
