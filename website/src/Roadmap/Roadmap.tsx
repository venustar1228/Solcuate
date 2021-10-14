import React from 'react';
import './Roadmap.css'
import bg from './bg2.jpeg'


import Data from "./Data"
import "react-vertical-timeline-component/style.min.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"

import mainLogo from './logo.png';


function Roadmap() {
    return (
        <div className="roadmap-section" id='roadmap'>
            <div className='roadmap-details'>
                <VerticalTimeline>
                    {Data.map(element => {
                        let isWorkIcon = element.icon === "work"
                        return (
                            <VerticalTimelineElement
                                date={element.date}
                                dateClassName="date"
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243, 0)' }}
                                icon={
                                    <img src="images/logo.png" alt='logo' className='time-icon' />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Roadmap