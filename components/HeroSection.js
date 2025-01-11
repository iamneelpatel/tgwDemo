// components/HeroSection.js
import Slideshow from './Slideshow';

const HeroSection = () => {
  const slides = [
    {
      image: '/images/slide1.jpg',
      title: 'Empowering Innovations',
      description: 'Delivering state-of-the-art solutions for your business needs.',
    },
    {
      image: '/images/slide2.jpg',
      title: 'Tailored Solutions',
      description: 'Customized services designed to elevate your enterprise.',
    },
    {
      image: '/images/slide3.jpg',
      title: 'Future-Ready Technology',
      description: 'Adopting cutting-edge technology for a sustainable future.',
    },
  ];

  return <Slideshow slides={slides} />;
};

export default HeroSection;
