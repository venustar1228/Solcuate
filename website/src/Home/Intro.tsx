import React from 'react';
import './Intro.css'

function Intro() {
    return (
        <>
        <div className="home_section" id="intro">
            <div className="home_grid">
                <div className="home_intro">
                    <div className="home_header">
                        Solcuate
                    </div>
                    <div className="home_description">
                         <text>Solcuate is a collection of 10 Nft's of cutie cate {"\n"}
                         (solcutecate solcuteate solcuate ....)</text>
                    </div>
                </div>
                <div className="home_image">
                    <img src= "images/cat.gif" alt='cat' className='img_cat'/>   
                </div>
            </div>
        </div>
        </>
    );
}

export default Intro;