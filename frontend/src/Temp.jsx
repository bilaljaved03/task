
//    jsx
//    // ContentModal.js
//    import React, { useState, useEffect } from 'react';
//    import Modal from 'react-modal';

//    Modal.setAppElement('#root');

//    const ContentModal = ({ isOpen, onRequestClose, content, type }) => {
//      const [viewPercentage, setViewPercentage] = useState(0);

//      useEffect(() => {
//        const handleScroll = () => {
//          if (type === 'text') {
//            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//            const clientHeight = document.documentElement.clientHeight;
//            const scrollPos = scrollTop + clientHeight;
//            const totalHeight = scrollHeight;
//            const percentage = (scrollPos / totalHeight) * 100;
//            setViewPercentage(percentage);
//          }
//        };

//        const handleTimeUpdate = (e) => {
//          if (type === 'video') {
//            const video = e.target;
//            const percentage = (video.currentTime / video.duration) * 100;
//            setViewPercentage(percentage);
//          }
//        };

//        if (type === 'text') {
//          window.addEventListener('scroll', handleScroll);
//        } else if (type === 'video') {
//          const videoElement = document.getElementById('video-content');
//          videoElement.addEventListener('timeupdate', handleTimeUpdate);
//        }

//        return () => {
//          if (type === 'text') {
//            window.removeEventListener('scroll', handleScroll);
//          } else if (type === 'video') {
//            const videoElement = document.getElementById('video-content');
//            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
//          }
//        };
//      }, [type]);

//      return (
//        <Modal isOpen={isOpen} onRequestClose={() => onRequestClose(viewPercentage)} contentLabel="Content Viewer">
//          {type === 'text' ? (
//            <div id="text-content" style={{ height: '1000px', overflowY: 'scroll' }}>
//              {content}
//            </div>
//          ) : (
//            <video id="video-content" controls style={{ width: '100%' }}>
//              <source src={content} type="video/mp4" />
//              Your browser does not support the video tag.
//            </video>
//          )}
//        </Modal>
//      );
//    };

//    export default ContentModal;
   

// 4. *Main Component*:
//    Handle the state and logic to show the modal and display the percentage viewed.

//    jsx
//    // App.js
//    import React, { useState } from 'react';
//    import ContentModal from './ContentModal';

//    const App = () => {
//      const [isModalOpen, setIsModalOpen] = useState(false);
//      const [contentType, setContentType] = useState(null);
//      const [content, setContent] = useState(null);
//      const [viewedPercentage, setViewedPercentage] = useState(0);

//      const openTextFile = () => {
//        // Assuming the text content is fetched or predefined
//        setContent("This is the content of the text file...");
//        setContentType('text');
//        setIsModalOpen(true);
//      };

//      const openVideoFile = () => {
//        // Assuming the video URL is predefined
//        setContent("path/to/video.mp4");
//        setContentType('video');
//        setIsModalOpen(true);
//      };

//      const closeModal = (percentage) => {
//        setViewedPercentage(percentage);
//        setIsModalOpen(false);
//      };

//      return (
//        <div>
//          <button onClick={openTextFile}>Open Text File</button>
//          <button onClick={openVideoFile}>Open Video File</button>
//          <ContentModal
//            isOpen={isModalOpen}
//            onRequestClose={closeModal}
//            content={content}
//            type={contentType}
//          />
//          <div>
//            {contentType === 'text' && <p>Text file viewed: {viewedPercentage.toFixed(2)}%</p>}
//            {contentType === 'video' && <p>Video file viewed: {viewedPercentage.toFixed(2)}%</p>}
//          </div>
//        </div>
//      );
//    };

//    export default App;
   

// 5. *Styling and Fine-tuning*:
//    You can add additional styling and fine-tune the modal or tracking as needed.

// This setup allows you to open a modal for either text or video content, track the percentage of the content viewed, and display that information in your main component.