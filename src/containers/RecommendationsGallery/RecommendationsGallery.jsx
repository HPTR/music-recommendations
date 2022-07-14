import React from 'react'
import RecommendationModal from '../../components/RecommendationModal/RecommendationModal';
import { useState } from 'react';
import songArray from "../../assets/data/DummySongData";
import Recommendation from '../../components/Recommendation/Recommendation';
import "./RecommendationsGallery.scss";

const RecommendationsGallery = () => {

    const [show, setShow] = useState(false);

    const toggleModal = () => {
      setShow(!show);
    }

    //To give the modal different information, maybe use state to grab the info needed and give it a prop

  return (
    <div className='recommendations-gallery'>
        <button onClick={toggleModal} >Modal</button>
        <RecommendationModal show={show} onClose={toggleModal} />
        {
          songArray.map((item) => {
            return (
            <div className="recommendations-gallery_recommendation">
              <Recommendation key={item.id} title={item.songName} artist={item.artistName} album={item.albumName} image={item.image} />
            </div>
            )
          })
        }
    </div>
  )
}

export default RecommendationsGallery