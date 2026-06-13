import "../App.css";
import fanImg from "../assets/images/Celingfan1.png";

function Why() {
  return (
    <section className="about">
      <h2 className="about-title">All about Fanimation</h2>

      <div className="about-card1">
        <div className="about-content1">
          <h3>Location is everything.</h3>

          <p>
            Installing a fan in your favorite indoor space? Or adding one
            to your outdoor haven? The location determines the fan rating
            (dry, damp and wet) you need. From there, the fun begins as you
            choose a style that fits you!
          </p>
        </div>

        <img src={fanImg} alt="Ceiling Fan" className="about-fan" />
      </div>
    </section>
  );
}

export default Why;