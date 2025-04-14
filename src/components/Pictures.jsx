import React from 'react';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile5 from '../assets/profile5.jpg';
import profile6 from '../assets/profile6.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pictures.css' ;


const PICTURE_DESCRIPTIONS = [
    { id: 1, description: 'This is a profile picture of a smiling person.' },
    { id: 2, description: 'A portrait of a person with a scenic background.' },
    { id: 3, description: 'A close-up shot of a person outdoors.' },
    { id: 5, description: 'A professional headshot of a person in formal attire.' },
    { id: 6, description: 'A candid picture of a person enjoying nature.' },
];
const Pictures = () => {
    const pictures = [
        { id: 1, src: profile1, alt: 'Image 1', description: 'This is a profile picture of a smiling person.' },
        { id: 2, src: profile2, alt: 'Image 2', description: 'A portrait of a person with a scenic background.' },
        { id: 3, src: profile3, alt: 'Image 3', description: 'A close-up shot of a person outdoors.' },
        { id: 5, src: profile5, alt: 'Image 5', description: 'A professional headshot of a person in formal attire.' },
        { id: 6, src: profile6, alt: 'Image 6', description: 'A candid picture of a person enjoying nature.' },
    ];

    const IMAGE_STYLE = {
        maxHeight: '600px',
        objectFit: 'cover',
    };

    return (
        <>
        <div>
            <Carousel>
                {pictures.map((picture) => (
                    <Carousel.Item key={picture.id}>
                        <img
                            className="d-block w-100"
                            src={picture.src}
                            alt={picture.alt}
                            style={IMAGE_STYLE}
                        />

                        <Carousel.Caption>
                                <p className = "picture-description">{picture.description}</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        <div style={{ marginBottom: '10rem' }}></div>
        </>
    );
};

export default Pictures;