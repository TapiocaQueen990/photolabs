import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import ModalPhotoList from 'components/ModalPhotoList';
import photos from 'mocks/photos';



const PhotoDetailsModal = (props) => {
  
  const chosenPhoto = () => {
    for (const pic of props.photos) {
      if(pic.id === props.state.selected) {
        return pic
      }
    }
  }
    
    
    const chosenPic = chosenPhoto()
    
    const chosenPicObject = chosenPic.similar_photos
    const id =props.photos.id
    const similarArr = []
    for (const key in chosenPicObject) {
      similarArr.push(chosenPicObject[key])
    }
   

    
   
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={chosenPic.id} fave={props.fave} toggleFave={props.toggleFave} />
        <img className="photo-details-modal__image" src={chosenPic.urls.full} />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={chosenPic.user.profile}
          />
          <div className="photo-list__user-profile">
            <span className="photo-details-modal__photographer-info">
              {chosenPic.user.username}
            </span>
            <div className="photo-details-modal__photographer-location">
            {chosenPic.location.city},{chosenPic.location.country}
            </div>
          </div>
        </div>
         <h2 className="photo-details-modal__header">Similar Photos</h2>
      </div>
     

      <div className="photo-details-modal__image">
        <PhotoList
          photos={similarArr}
          toggleFave={props.toggleFave}
          fave={props.fave}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
