import React from "react";
import 'video-react/dist/video-react.css';
import ProgressButton from './comps/ProgressButton'
import ListItem from "./comps/ListItem";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route ,useParams} from 'react-router-dom'
const Home = () => {
  return (
    <div >
      <div className="top-container p-5">
        <h2>You have 3 Trainings to Complete</h2>
        <h6>You Must Have Completed All Trainings Before recieving the Job</h6>
      </div>
      <div className="main-container">
        <ul style={{ listStyle: "decimal" }}>
          <ListItem
            title="First Cartoon Video"
            videoSrc={'/video_1.mp4'}
          />
          <ListItem
            title="Moon Landing"
            videoSrc={'/video_2.mp4'}
          />
<ListItem
            title="First Cartoon Video"
            videoSrc={'/video_1.mp4'}
          />
          <ListItem
            title="Moon Landing"
            videoSrc={'/video_2.mp4'}
          />

<ListItem
            title="First Cartoon Video"
            videoSrc={'/video_1.mp4'}
          />
          <ListItem
            title="Moon Landing"
            videoSrc={'/video_2.mp4'}
          />

<ListItem
            title="First Cartoon Video"
            videoSrc={'/video_1.mp4'}
          />
          <ListItem
            title="Moon Landing"
            videoSrc={'/video_2.mp4'}
          />
        </ul>
      </div>
    </div>
  )

}

const About = () =>{

  return(
<h2>About</h2>
  )
}

const ImageViewer = (imgrc) =>{
  const {path} = useParams()
  return(
    <>
    <div className="container p-4">
    <img  height={400} width={400} src={ "/" + path} alt="" />
    </div>
    </>
      )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="image-viewer/:path" Component={ImageViewer} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default App;
