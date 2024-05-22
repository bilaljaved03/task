import React, { useState, useEffect } from 'react';
import ProgressButton from './ProgressButton';
import PopUpDisplay from './PopUpDisplay';

function ListItem({ title, videoSrc, myName }) {
  const [isPopUpDisplaying, setPopUpDisplay] = useState(false);
  const [videoPausedTime, setVideoPausedTime] = useState(0);
  const [videoPausedMiliSeconds, setVideoPausedMiliSeconds] = useState(0);
  const [overallProgressPercentage, setOverallProgressPercentage] = useState(0);
  const [imagePercentage,setImagePercentage]  = useState(0)
  const [documentPercentage,setDocumentPercentage]  = useState(0)
  
  const handleVideoPause = React.useCallback((VAL) => {
    setVideoPausedTime(VAL);
  }, [setVideoPausedTime]);

  const handlePopUpDisplay = React.useCallback((val) => {
    setPopUpDisplay(val);
  }, [setPopUpDisplay]);


  const handleDocumentPercentage = (perc) =>{
    setDocumentPercentage(perc)
      }

  const handleImagePercentage = (perc) =>{
setImagePercentage(perc)
  }
  const handleVideoPausedMs = React.useCallback((VAL) => {
    setVideoPausedMiliSeconds(VAL);
  }, [setVideoPausedMiliSeconds]);
 
 
  const totalProgressPercentage = 100;
  const videoPortion = 33;
  const imagePortion = 33;
  const documentPortion = 33;
 
  useEffect(() => {
    const calculateOverallProgress = () => {
      const videoProgress = (videoPausedTime / 100) * (videoPortion / 100)  * totalProgressPercentage;
      const documentProgress = (documentPercentage / 100) * (documentPortion / 100)  * totalProgressPercentage;
      const imageProgressPercentage = (imagePercentage / 100) * (imagePortion / 100) * totalProgressPercentage;
      const overallProgress = videoProgress + imageProgressPercentage + documentProgress;
      setOverallProgressPercentage(overallProgress);
    };
    calculateOverallProgress();
  }, [videoPausedTime, videoPortion, totalProgressPercentage,imagePortion,imagePercentage,documentPercentage]);
  return (
    <>
      <div>
        {isPopUpDisplaying && (
          <PopUpDisplay
            setPopUpDisplay={handlePopUpDisplay}
            videoPausedTime={videoPausedTime}
            setVideoPausedTime={handleVideoPause}
            videoPausedMiliSeconds={videoPausedMiliSeconds}
            setVideoPausedMiliSeconds={handleVideoPausedMs}
            videoSrc={videoSrc}
            imagePercentage={imagePercentage}
            setImagePercentage={handleImagePercentage}
            documentPercentage={documentPercentage}
            setDocumentPercentage={handleDocumentPercentage}
            />
        )}
      </div>
      <div>
        <li
          style={{ backgroundColor: "#e8e6df" }}
          className="pt-2 container mt-2">
          <div className="inner-con inner-con-1 d-flex align-items-center justify-content-between">
            <h5>{title}</h5>
            <div className="side-items d-flex align-items-center justify-content-between">
              <div className="percentage-elem me-3">
                {
                  <ProgressButton progress={parseInt(overallProgressPercentage).toString()} />                
                }
              </div>
              <div className="start-button">
                <button
                  onClick={handlePopUpDisplay}
                  className="btn btn-primary pb-1 mb-2">
                  Start
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}
export default ListItem;