import React from 'react'
import RecommendationModal from '../../components/RecommendationModal/RecommendationModal';
import { useState } from 'react';

const RecommendationsGallery = () => {

    const [show, setShow] = useState(false);

    const toggleModal = () => {
      setShow(!show);
    }


  return (
    <div>
        <h1>HELLO</h1>
        <button onClick={toggleModal} >Modal</button>
        <RecommendationModal show={show} onClose={toggleModal} />
    </div>
  )
}

export default RecommendationsGallery