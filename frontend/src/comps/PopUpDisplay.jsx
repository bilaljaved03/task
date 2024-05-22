import React, { useEffect, useRef, useState } from 'react'
import { usePopUp } from '../contexts/PopUpContext'
import ProgressButton from './ProgressButton';
import { FaTimes } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
function PopUpDisplay({
  setPopUpDisplay,
  videoPausedTime, setVideoPausedTime,
  videoPausedMiliSeconds,
  setVideoPausedMiliSeconds,
  videoSrc,
  imagePercentage,
  setImagePercentage,
  documentPercentage,
  setDocumentPercentage
}) {
  const [isVideoUpdating, setVideoUpdate] = useState(false)
  const [isDocumentViewerDisplaying, setDocumentViewerDisplay] = useState(false)
  const [isFirstPlay,setFirstPlay] = useState(true)
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const handleVideoEnd = () => {
    setVideoPausedTime(0);
    setVideoPausedMiliSeconds(0);
  };
  const handleImageViewNavigation = (imgSrc) => {
    setImagePercentage(100)
  };
  const handleDocumentContentDivScroll = () => {
    if (contentRef.current) {
      const scrollPosition = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight;
      const clientHeight = contentRef.current.clientHeight;
      const percentage = (scrollPosition / (scrollHeight - clientHeight)) * 100;
      if (percentage > documentPercentage)
        setDocumentPercentage(percentage.toFixed(2));
    }

  }


  useEffect(() => {

    const videoElement = videoRef.current;;
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [handleVideoEnd])
  return (
    <div>
      <div style={{
        position: "fixed",
        top: '10%',
        height: "80vh",
        zIndex: "100",
        left: "6%"
      }} className='container bg-light overflow-y-scroll shadow-lg rounded me-5 ms-5'>
        {/* ///////////////////////// */}
        {
          isDocumentViewerDisplaying &&
          <div
            ref={contentRef}
            onScroll={handleDocumentContentDivScroll}
            style={{
              position: "fixed",
              top: '10%',
              height: "80vh",
              zIndex: "100",
              left: "6%"
            }} className='container document-container bg-light overflow-y-scroll  shadow-lg rounded me-5 ms-5'
          >

            <div className="container p-5 ">
              <h2>Moon Landing</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum provident illo saepe neque quisquam temporibus optio obcaecati labore, sed est itaque a reiciendis atque, deserunt at perspiciatis. Perspiciatis, asperiores.
              Unde, expedita sed sequi voluptatibus similique quidem! Harum quas, repellat minima cumque facere, repellendus commodi inventore, est voluptatum corporis aperiam deserunt voluptatem omnis a! At vero rerum quaerat totam provident!
              Quia totam laborum, vero quo facere reprehenderit nobis quae cum minima maxime tempora temporibus error, natus at delectus asperiores vitae, doloribus sit sint exercitationem aliquam tempore quisquam laudantium mollitia! Voluptates.
              Itaque nulla sequi voluptatem, quam adipisci harum corrupti quisquam incidunt cumque nesciunt id velit, cum dolore obcaecati unde possimus voluptate vitae error sit! Voluptatem dignissimos aliquid vel reiciendis, eius voluptas.
              Sapiente excepturi facere id impedit reiciendis inventore quas, ab repellendus neque modi, qui voluptas, assumenda aliquid. Quidem eligendi eos fugiat nesciunt nemo ratione dolorum porro omnis, voluptate ut hic dolor!
              Modi debitis itaque dolorem voluptatum nisi? Eveniet, nam, quisquam autem ducimus voluptates molestias voluptas recusandae qui in error voluptatibus natus perferendis quae porro quia rem cupiditate tenetur? Voluptates, nam tenetur!
              Ipsum quo ullam alias ipsam adipisci molestiae est facere nemo. Ut id nulla minus corporis, quidem libero possimus quisquam! Debitis quidem dolore aut nam animi maiores sint perferendis possimus aliquam.
              Quibusdam nobis iusto fugit incidunt quos laboriosam dolores, consequuntur maiores neque debitis iste repellat ea illum sapiente temporibus consectetur voluptas porro soluta nam illo dolor inventore ad distinctio. Id, aut.
              Voluptatem, iste dicta maxime, ducimus impedit cum assumenda, ad rerum optio deleniti repellat perferendis exercitationem aliquam odit magni adipisci eaque architecto explicabo quae et nihil placeat. Accusantium totam aliquam hic.
              Veniam expedita nostrum praesentium necessitatibus saepe earum impedit aperiam, minus debitis repudiandae modi commodi, similique pariatur totam omnis? Perferendis accusantium eveniet soluta dolor modi maxime assumenda praesentium tempore cum similique?
              Corrupti dolore, eum, ad consectetur deserunt quia non fugit, consequatur eveniet vero neque dolores illum adipisci sequi odio pariatur natus dicta nihil reiciendis? Illum error quia recusandae sunt corporis voluptates.
              Officiis eligendi dolores doloribus maxime quas optio sint consectetur porro laudantium placeat eaque saepe ipsum, atque, aut architecto vel hic? Incidunt ex nobis aspernatur ut, ducimus voluptatum facilis voluptate numquam?
              Provident blanditiis mollitia, voluptates minima illum voluptatibus dignissimos debitis sit possimus quos. Ab possimus impedit earum! Quo eum dolor natus explicabo, molestiae nam voluptate sequi exercitationem iste beatae, eveniet quasi!
              Sunt nemo consequuntur delectus cupiditate excepturi provident explicabo iusto praesentium labore voluptatem error numquam omnis placeat expedita necessitatibus, quis consequatur nobis cumque impedit ex! Ullam voluptates nobis eos quam labore!
              Reprehenderit esse molestiae expedita error totam consequuntur quidem perferendis ut dolor quas animi nulla sed velit facilis tempora aut, nesciunt qui rerum quo reiciendis nam! Adipisci reiciendis harum delectus magnam.
              Eos nulla voluptate laudantium repellat ipsam quae enim fugiat maiores neque, ipsa rem facere eius vel minus ea, aliquid saepe porro tempora beatae, illo maxime molestiae atque. Adipisci, illum veritatis.
              Animi autem odit commodi blanditiis facilis consequuntur aliquid accusamus modi, fugit adipisci velit aut nobis sapiente rem unde ratione. Ipsam, non dolorem dolore expedita repellat harum illum necessitatibus natus laboriosam.
              Accusantium, cupiditate pariatur cumque officiis dolore modi et error enim dolores eum aspernatur aliquid! Neque atque praesentium ipsa dignissimos vel. Molestias vel dolor dignissimos voluptate beatae accusantium sapiente amet laudantium!
              Nesciunt tempore excepturi sunt voluptatem omnis voluptates voluptate laboriosam quas, expedita alias odio libero aspernatur atque, modi ea? Sit sapiente eos laborum id at voluptates vero dicta vitae ducimus quas.
              Ullam iusto debitis voluptas velit delectus soluta enim labore accusantium laboriosam quis quia eligendi veniam, earum sed harum rem atque voluptatem assumenda pariatur. Illum vero, consequatur soluta error facilis nemo?
              Magni reprehenderit fugiat amet cumque aspernatur hic explicabo ipsa perspiciatis quaerat harum aliquid ad, perferendis beatae unde sequi ipsum accusantium dicta sint repudiandae earum. Inventore ratione distinctio laboriosam culpa nemo?
              Voluptatum assumenda delectus, provident iusto, sunt suscipit labore minus aperiam, laboriosam non totam ex repudiandae harum eveniet et numquam? Vel tenetur ad blanditiis, ducimus odio illo nostrum minus molestias ratione.
              Similique ipsam nulla velit cupiditate. Ipsa recusandae nobis neque, doloremque reiciendis animi error est quam facere, ea et voluptates reprehenderit autem consequuntur corporis sed mollitia quae perspiciatis nemo provident eaque.
            </div>
            <button
              style={{
                position: "fixed"
                , top: "13%", right: "22vh",
                borderRadius: "50%",
                width: "3.3rem",
                height: "3.1rem",
              }}
              onClick={() => setDocumentViewerDisplay(false)}
              className='btn btn-primary '>
              <FaTimes fontSize={18} />
            </button>
          </div>
        }
        {/* ///////////////////////// */}
        <div className="cross-button pe-3 pt-3 d-flex  justify-content-end">
          <button
            onClick={() => setPopUpDisplay(false)}
            className='btn btn-primary'> close</button>
        </div>
        <div className="main-content pb-2 d-flex mt-2  justify-content-between">
          <div className="video-container me-2 bg-light shadow-lg  rounded">
            <video
              onPlay={() => {
                setVideoUpdate(true)
                if(isFirstPlay){
                  const video = videoRef.current;
                  video.currentTime = videoPausedMiliSeconds
                }
               setFirstPlay(false)
              }}
              onPause={() => {
                setVideoUpdate(false)
                const currentTime = videoRef.current.currentTime;
                const duration = videoRef.current.duration;
                const percentagePlayed = (currentTime / duration) * 100;
                // console.log(percentagePlayed)
                // console.log(videoPausedTime)
                setVideoPausedTime(percentagePlayed)
                setVideoPausedMiliSeconds(currentTime)
              }}
              onTimeUpdate={(e) => {
                setVideoUpdate(true)
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;
                setVideoPausedTime(currentTime)
              }}
              ref={videoRef}
              autoPlay controls style={{ width: 300, height: 300 }}>
              <source src={videoSrc} type="video/mp4" />
            </video>
            <h5 className='ps-3'>A Journey Through  </h5>
            <h6 className='ps-3' >{2}m:{34}s</h6>
            <h6 className='ps-3' >2.4mb</h6>

            <div className='ps-3 bg-gray-'>
              {
                !isVideoUpdating ?
                  <ProgressButton progress={parseInt(videoPausedTime)} /> : <h6 className='' >Loading..</h6>
              }
            </div>
            <div className='ps-3'>
              <MdCheck style={{ fontSize: 24 }} />
            </div>
          </div>
          <div className="image-container pt-5 me-2  bg-light shadow-lg  rounded">
            <img
              onClick={() => handleImageViewNavigation("img_1.jpg")}
              className='mt-3' src="/img_1.jpg" width={300} height={236} alt="" />

            <h5 className='ps-3'>A Journey Through</h5>
            <h6 className='ps-3' >2.3mb</h6>
            <div className='ps-3 bg-gray-'>
              <ProgressButton progress={parseInt(imagePercentage).toString()} />
            </div>
            <h6 className='ps-3' >300X200px</h6>
            <div className='ps-3 bg-gray'>
              <MdCheck style={{ fontSize: 24 }} />
            </div>

          </div>
          <div className="document-container pt-5 me-2  bg-light shadow-lg  rounded">
            <img
              onClick={() => setDocumentViewerDisplay(true)}
              className='mt-3' src="/document_1.png" width={300} height={236} alt="" />
            <h5 className='ps-3 title'>Mathematical Foundation </h5>
            <h6 className='ps-3' >10 Pages</h6>
            <div className='ps-3 bg-gray-'>
              <ProgressButton progress={parseInt(documentPercentage)} />
            </div>
            <h6 className='ps-3' >John Martin</h6>

            <div className='ps-3 bg-gray'>
              <MdCheck style={{ fontSize: 24 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUpDisplay
