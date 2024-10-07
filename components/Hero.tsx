// Suggested code may be subject to a license. Learn more: ~LicenseLog:3600909191.
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="hero-button">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
