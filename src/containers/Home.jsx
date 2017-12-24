// Garima 
// input postal code, convert to lat/lng 
// submit to job search / dog walker search (maps)
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return (
      <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src='/static/assets/cute-dog.jpg' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src='/static/assets/andrew-pons-9.jpg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src='/static/assets/dogwalk.jpg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        );
    }
}

export default Homepage;