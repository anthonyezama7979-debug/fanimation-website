import "../App.css"
import aboutImg from "../assets/images/Standingfan.png"



function About(){

    return(
<section id="about" className="about">
  <div className="about-container">
    <h2>About Us</h2>

    <div className="about-card">
      <div className="about-text">
        <h3>Bringing Comfort to Every Home</h3>

        <p>
          At Fanimation, we provide high-quality ceiling fans designed
          to combine comfort, style, and energy efficiency. Our mission
          is to help customers create cool and beautiful living spaces
          with reliable products they can trust.
        </p>

        <button>Learn More</button>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="About Fanimation" />
      </div>
    </div>
  </div>
</section>
    )
}
export default About