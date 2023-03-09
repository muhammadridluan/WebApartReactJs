import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Corousel() {
    return (
    <>
    <div className='container-sm container-fluid '>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            height={450}
            src="https://i0.wp.com/f1-styx.imgix.net/article/2022/09/20110353/inspirasi-kamar-aesthetic-hitam-mewah.jpg?resize=800%2C646&ssl=1"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            height={450}
            src="https://interiordesign.id/wp-content/uploads/2022/04/12-PS-4-1024x768-1.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            height={450}
            src="https://www.intiland.com/wp-content/uploads/2022/09/4-e1663661346986.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    </div>
    
    </>
)
}
