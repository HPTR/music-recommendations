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
                Content goes here
            </div>
            <div className='recommendation-modal__footer'>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default RecommendationModal