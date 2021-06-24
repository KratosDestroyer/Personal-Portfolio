import React from 'react';
import Particles from 'react-particles-js';
import './hscroller.styles.scss';

class Hscroller extends React.Component{
    render(){
        return(
            <div className="home-container-fluid">
                <div className="home-container">
                    <div className="home-container-title"> process built <br /> on parternship</div>
                    <div className="separation"></div>
                    <div className="home-container-subtitle">Our design and engineering services are transparent, flexible and collaborative. <br />
                    Tell us what you need, and we’ll get it done. On your terms.</div>
                </div>
                <Particles id="particles-js"
                    params={{
                        particles: {
                            number: {
                                value: 150,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: '#000000'
                            },
                            opacity: {
                                value: 0,
                                anim: {
                                    enable: false
                                }
                            },
                            shape: {
                                stroke: {
                                    width: 5
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: true,
                                }
                            },
                            line_linked: {
                                enable: true,
                                shadow: {
                                    enable: true,
                                    color: '#3CA9D1',
                                    blur: 5
                                }
                            },
                            move: {
                                speed: 1,
                                direction: "left",
                                random: false,
                                straight: true,
                                outMode: 'out',
                                attract: {
                                    enable: true,
                                    rotateX: 600,
                                    rotateY: 500
                                }
                            },
                        },
                    }}
                    />
            </div>
        )
    }
}
export default Hscroller;