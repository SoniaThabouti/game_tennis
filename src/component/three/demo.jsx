


import React from 'react';
import { Player } from 'video-react';
import video1 from "./images/démo.mp4";
import "./page1.css"

export default function Video() {
    return(
        <video src={video1} width="600" height="300" controls="controls" autoplay="true" className='position_video' />

        
    )
}



