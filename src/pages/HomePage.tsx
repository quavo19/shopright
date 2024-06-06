import React from 'react'
import Slider from '../components/Slider';


const HomePage: React.FC = () => {
    const slides = [
        {
          imageUrl: 'https://example.com/image1.jpg',
          altText: 'Image 1',
          title: 'Slide 1',
          description: 'Description of slide 1'
        },
        {
          imageUrl: 'https://example.com/image2.jpg',
          altText: 'Image 2',
          title: 'Slide 2',
          description: 'Description of slide 2'
        },
      ];
    return (
        <div style={{
            height: "100vh",
            background: "blue"
        }}>
            <Slider slides={slides} />
        </div>
    )
}
export default HomePage;