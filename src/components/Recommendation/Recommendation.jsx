import React from 'react'
import "./Recommendation.scss";

const Recommendation = ({title, artist, album, image}) => {
  return (
    <div className="recommendation">
        <img src={image} className="recommendation__image" alt={album}/>
        <div className="recommendation__info">
          <h2 className="recommendation__title">{title}</h2>
          <h3 className="recommendation__artist">{artist}</h3>
          <h4 className="recommendation__album">{album}</h4>
        </div>
    </div>
  )
}

export default Recommendation