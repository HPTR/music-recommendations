import React from 'react'
import "./RecommendationModal.scss"

const RecommendationModal = ({show, onClose}) => {

  return (
    <div className={`recommendation-modal ${show ? 'show' : ''}`} onClick={onClose}>
        <div className='recommendation-modal__content' onClick={e => e.stopPropagation()}>
            <div className="recommendation-modal__header">
                <h4 className='recommendation-modal__title'>Header Content/title</h4>
            </div>
            <div className="recommendation-modal__body">
            <iframe title="if-you-wanna" style={{'borderRadius':'12px'}} src="https://open.spotify.com/embed/track/6Ca3uEAuun3HusTUiIXKs1?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className='recommendation-modal__footer'>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default RecommendationModal