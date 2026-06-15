import heroImg from "../assets/images/Hero.png"
import "../App.css"

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Ceiling Fan" className="hero-img" />

      <div className="hero-content">
        <h1>Experience Comfort & Style</h1>

        <p>
          Discover premium ceiling fans designed to
          enhance your home with elegance and efficiency.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
