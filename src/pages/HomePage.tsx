import React from 'react'
import Slider from '../components/Slider';
import About from '../components/About';


const HomePage: React.FC = () => {
    const slides = [
        {
          imageUrl: './images/desktop-image-hero-1.jpg',
          imageUrlMobile: "./images/mobile-image-hero-1.jpg",
          altText: 'Image 1',
          title: 'Discover innovative ways to decorate',
          description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
          imageUrl: './images/desktop-image-hero-2.jpg',
          imageUrlMobile: "./images/mobile-image-hero-2.jpg",
          altText: 'Image 2',
          title: 'We are available all across the globe',
          description: "With stores all over the world, it's easy for you to find furniture  for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us todav."
        },
        {
            imageUrl: './images/desktop-image-hero-3.jpg',
            imageUrlMobile: "./images/mobile-image-hero-3.jpg",
            altText: 'Image 3',
            title: 'Manufactured with the best materials',
            description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office'
          },
      ];
    return (
        <div style={{
            height: "100vh",
        }}>
            <Slider slides={slides} />
            <About/>
        </div>
    )
}
export default HomePage;