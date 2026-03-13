const { createRoot } = ReactDOM;

function ContactPage() {
  useScrollReveal();

  return (
    <>
      <div className="ellipse circle1"></div>
      <div className="ellipse circle2"></div>
      <div className="ellipse circle3"></div>
      <div className="ellipse circle4"></div>

      <SiteNav active="Contact" className="navbar navbar1" />

      <div className="row-d row3 reveal-on-scroll reveal-up">
        <div className="card-a card-left">
          <div className="card-circle1"></div>
          <h2 className="card-subtitle">Contact info</h2>
        </div>
        <h2 className="row-subtitle2">Contact me to start working together</h2>
      </div>

      <div className="row4">
        <div className="col-left2 reveal-on-scroll reveal-left">
          <div className="col">
            {[
              ["assets/contact/row-frame/row-mail.svg", "Mail US", "ah7mostafa@outlook.com"],
              ["assets/contact/row-frame/row-call.svg", "Contact US", "+20 1212811805"],
              ["assets/contact/row-frame/row-location.svg", "Location", "El-mansoura , Egypt"]
            ].map((item, index) => (
              <div key={item[1]} className={`row-g row${index + 5}`}>
                <div className="row-frame-left">
                  <object data={item[0]} className="arrow-right row-mail" type="image/svg+xml"></object>
                </div>
                <div className="row-col">
                  <p className="row-text-product">{item[1]}</p>
                  <p className="row-text-hero">{item[2]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-bottom1">
            <h2 className="subtitle-hero">social media</h2>
            <div className="row-bottom">
              <img src="assets/contact/img-circle1.png" className="img-circle" alt="social 1" />
              <img src="assets/contact/img-circle2.png" className="img-circle" alt="social 2" />
              <img src="assets/contact/img-circle3.png" className="img-circle" alt="social 3" />
              <img src="assets/contact/img-circle4.png" className="img-circle" alt="social 4" />
            </div>
          </div>
        </div>

        <div className="card4 reveal-on-scroll reveal-right reveal-delay-1">
          <h2 className="card-subtitle2">
            Let's Work <span className="sub-text">Together.</span>
          </h2>
          <div className="input-group">
            <input className="input-group-input-hero-header input-group-hero-header1" defaultValue="Name" />
            <input className="input-group-input-hero-header input-group-hero-header2" defaultValue="Email" />
          </div>
          <input className="card-input-hero1 text-gray input-black" defaultValue="Subject" />
          <textarea className="card-input-hero2 text-gray input-black" defaultValue="Message"></textarea>
          <div className="card-frame-bottom">
            <object data="assets/card-circle/card-arrow-right.svg" className="message card-arrow-right2" type="image/svg+xml"></object>
            <p className="card-text2">Send Message</p>
          </div>
        </div>
      </div>

      <FooterSection className="column-e col-bottom2 reveal-on-scroll reveal-up" />
    </>
  );
}

createRoot(document.getElementById("root")).render(<ContactPage />);
