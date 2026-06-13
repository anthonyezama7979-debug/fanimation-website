import fanImg from "../assets/images/Celingfan.png"

function Featured() {
  return (
    <section className="featured" id="products">

     <h2>Best Selling</h2>
    <p className="subtitle">
        Shop from our best selling products
      </p>



      <div className="cards">

        <div className="card">
          <img src={fanImg} alt="fan" />
          <h4>The Spitfire</h4>
          <p>Versatile design with interchangeable blade finishes.</p>
          <h3>$429</h3>
        </div>

        <div className="card">
          <img src={fanImg} alt="fan" />
          <h4>The Spitfire</h4>
          <p>Versatile design with interchangeable blade finishes.</p>
          <h3>$429</h3>
        </div>

        <div className="card">
          <img src={fanImg} alt="fan" />
          <h4>The Spitfire</h4>
          <p>Versatile design with interchangeable blade finishes.</p>
          <h3>$429</h3>
        </div>
{/* 
        <div className="card">
          <img src={fanImg} alt="fan" />
          <h4>The Spitfire</h4>
          <p>Versatile design with interchangeable blade finishes.</p>
          <h3>$429</h3>
        </div>

            <div className="card">
          <img src={fanImg} alt="fan" />
          <h4>The Spitfire</h4>
          <p>Versatile design with interchangeable blade finishes.</p>
          <h3>$429</h3>
        </div> */}
      </div>
    </section>
  );
}

export default Featured;