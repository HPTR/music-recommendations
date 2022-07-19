import React from 'react'
import "./RecommendationModal.scss"

const RecommendationModal = ({ show, onClose, song }) => {

  const { songName, artistName, albumName, image, spotifyEmbed, review } = song;

  return (
    <div className={`recommendation-modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='recommendation-modal__content' onClick={e => e.stopPropagation()}>
        <div className="recommendation-modal__body">
          <img src={image} className="recommendation-modal__image" alt={image}/>
          <div className="recommendation-modal__details">
            <h2 className="recommendation-modal__title">{songName}</h2>
            <h3 className="recommendation-modal__artist">{artistName}</h3>
            <h4 className="recommendation-modal__album">{albumName}</h4>
          </div>
        </div>
        <div className='recommendation-modal__review'>
          {review}
        </div>
        {spotifyEmbed}
      </div>
    </div>
  )
}

export default RecommendationModal