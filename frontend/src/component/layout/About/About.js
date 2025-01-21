import React from 'react';
import './aboutSection.css';
import SatishImg from '../../../images/me.jpg';
import nirojImg from '../../../images/giri.jpg';
import ashimImg from '../../../images/asim.jpg';

const About = () => {
  return (
    <>
      <h2 className="about-us">About Us</h2>
      <div className="underline-about"></div>
      <section id="about">
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" src={SatishImg} alt="Person 1" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Satish Pokharel</div>
          <div className="title-about">Backend Developer</div>
        </div>
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" style={{objectFit:'cover'}} src={nirojImg} alt="Person 2" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Niroj Giri</div>
          <div className="title-about">Frontend Developer</div>
        </div>
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" src={ashimImg} alt="Person 3" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Ashim Khanal</div>
          <div className="title-about">API design and testing</div>
        </div>
      </section>
    </>
  );
};

export default About;
