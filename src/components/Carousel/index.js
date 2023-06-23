import React, { useState, useEffect } from 'react';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi'
import './index.css'; // Import CSS file for styling
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        let interval;
        const startSlideShow = () => {
            interval = setInterval(goToNextSlide, 6000);
        };
        const stopSlideShow = () => {
            clearInterval(interval);
        };
        if (!isHovered) {
            startSlideShow();
        } else {
            stopSlideShow();
        }
        return () => {
            stopSlideShow();
        };
        // eslint-disable-next-line
    }, [isHovered]);
    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} className="carousel">
            <button className="carousel__button__left" onClick={goToPreviousSlide}>
                <HiArrowSmLeft />
            </button>
            <div className="carousel__slide">
                <div>
                    <h1 className='carousel-heading'>{images[currentIndex].title}</h1>
                    <div className='carousel-disc'>
                        <p >{images[currentIndex].description}</p>
                        {images[currentIndex].btn !== "" && <button type='button' className='btn' >{images[currentIndex].btn}</button>}
                    </div>
                </div>
                <img className='carousel-img' src={images[currentIndex].imageUrl} alt="Carousel Slide" />
            </div>
            <button className="carousel__button__right" onClick={goToNextSlide}>
                <HiArrowSmRight />
            </button>
        </div>
    );
};
export default Carousel;