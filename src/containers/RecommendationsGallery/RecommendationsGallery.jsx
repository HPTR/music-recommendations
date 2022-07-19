import React from 'react'
import RecommendationModal from '../../components/RecommendationModal/RecommendationModal';
import { useState, useEffect } from 'react';
import songArray from "../../assets/data/DummySongData";
import Recommendation from '../../components/Recommendation/Recommendation';
import "./RecommendationsGallery.scss";

const RecommendationsGallery = () => {

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(0);
  const [songProp, setSongProp] = useState(songArray[0]);

  const toggleModal = () => {
    setShow(!show);
  }

  const onClick = (event) => {
    setModal(Number(event.target.id));
    toggleModal();
  }

  useEffect(() => {
    setSongProp(songArray[modal])
  }, [modal])

  return (
    <div className='recommendations-gallery'>
      <RecommendationModal show={show} onClose={toggleModal} song={songProp} />
      {
        songArray.map((item) => {
          return (
            <div key={item.id} className="recommendations-gallery__recommendation" onClick={onClick}>
              <Recommendation id={item.id} onClick={onClick} title={item.songName} artist={item.artistName} album={item.albumName} image={item.image} />
            </div>
          )
        })
      }
    </div>
  )
}

export default RecommendationsGallery