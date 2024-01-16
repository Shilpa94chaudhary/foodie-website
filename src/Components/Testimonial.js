import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-list">
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonial-stars-container">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiOutlineStar></AiOutlineStar>
          </div>
          <h2>John Doe</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonial-stars-container">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiOutlineStar></AiOutlineStar>
          </div>
          <h2>John Doe</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonial-stars-container">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiOutlineStar></AiOutlineStar>
          </div>
          <h2>John Doe</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
