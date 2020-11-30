import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomImage } from '../../store/image/imageActions';
import classes from './Home.module.css';
import { Loader } from '../../components/Loader/Loader';

const Home = (props) => {

  const lastDownloadedImageUrl = props.lastDownloadedImage ? props.lastDownloadedImage.src : '';

  return (
    <section className={classes.Home}>
      <header>
        <h1>
          Home
        </h1>
      </header>
      <main>
        { 
          props.loading ? 
          <Loader/> :
          <>
          { 
            lastDownloadedImageUrl ? 
            <img src={lastDownloadedImageUrl} alt={'Alt'}/> :
            <h2>Click here &darr;</h2>
          }
          <button onClick={props.fetchRandomImage}>Get random GIF</button>
          </> 
        }
      </main>
    </section>
  )
  
}

const mapStateToProps = (state) => {
  return {
    lastDownloadedImage: state.image.images.slice().reverse()[0],
    loading: state.image.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomImage: () => dispatch(fetchRandomImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)