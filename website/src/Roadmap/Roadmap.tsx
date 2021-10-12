import React from 'react';
import './Roadmap.css'

import Data from "./Data"
import "react-vertical-timeline-component/style.min.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"


function Roadmap() {
    return (
        <>
            <div className="roadmap-section" id='roadmap'>
                <div className='roadmap-details'>
                    <div className="roadmap_title">
                        <h1 className="title">Our Roadmap</h1>
                    </div>
                    <VerticalTimeline>
                        {Data.map(element => {
                            let isWorkIcon = element.icon === "work"

                            return (
                                <VerticalTimelineElement
                                    date={element.date}
                                    dateClassName="date"
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
        </>
    );
}

export default Roadmap