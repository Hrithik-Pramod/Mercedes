import React from 'react';
import BannerBg from '../assets/images/banner-bg.jpg';

const Slider = () => {
    return (
        <div
            id="slider"
            style={{
                backgroundImage: `url(${BannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh', // Full viewport height
                position: 'relative'
            }}
        >
            <div className="overlay-text" style={{
                position: 'absolute',
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Verdana, sans-serif'
            }}>
                <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>BMW M. KRAFT TRIFFT DYNAMIK.</p>
                <a style={{ marginTop: '5px', display: 'block', fontSize: '1rem' }}>GEBOREN AUF DER RENNSTRECKE, AUF ALLEN STRASSEN ZU HAUSE.</a>
            </div>
        </div>
    );
};

export default Slider;