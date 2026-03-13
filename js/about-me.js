const { createRoot } = ReactDOM;

function AboutPage() {
  useScrollReveal();
  const testimonialRows = sharedTestimonialRows;

  return (
    <>
      <div className="ellipse ellipse1"></div>
      <div className="ellipse ellipse2"></div>
      <div className="ellipse ellipse3"></div>
      <div className="ellipse circle1"></div>
      <div className="ellipse circle2"></div>
      <div className="ellipse circle3"></div>
      <div className="ellipse circle4"></div>

      <SiteNav active="About" className="navbar navbar1" />

      <div className="row-d row3 reveal-on-scroll reveal-up">
        <div className="card-a card-left card-top2">
          <div className="card-circle1"></div>
          <h2 className="card-subtitle">ABOUT ME</h2>
        </div>
        <h2 className="row-subtitle2">The products I design are a reflection of my thinking.</h2>
      </div>

      <div className="row4">
        <div className="group-left reveal-on-scroll reveal-left">
          <div className="group">
            <div className="rect"></div>
            <img src="assets/about-me/img.png" className="img" alt="Ahmed Atya" />
          </div>
          <div className="card4">
            <p className="card-text-top">Repeat Clients</p>
            <object data="assets/about-me/card-group.svg" className="card-group" type="image/svg+xml"></object>
            <h2 className="card-subtitle2">85%</h2>
          </div>
        </div>

        <div className="col-right reveal-on-scroll reveal-right reveal-delay-1">
          <div className="column-a col1">
            <div className="column-group">
              <h2 className="column-subtitle1">
                I design products
                <br />
                that <span className="sub-text">solve problems </span>, not just visuals.
                <br />
                <br />
              </h2>
              <img src="assets/column-group/column-img.png" className="column-img" alt="Decorative" />
            </div>
            <p className="column-text1">
              I design interfaces that turn complex problems into simple solutions. Every project is approached
              with clarity, creativity, and focus on the user's experience, delivering results that matter.
            </p>
          </div>
          <ActionCard text="Download CV" icon="assets/card-circle/card-arrow-right.svg" className="card-b card5" />
        </div>
      </div>

      <div className="component-a component1">
        <div className="logos-track" id="track">
          {Array.from({ length: 50 }, (_, groupIndex) => (
            <div className="logos-group" key={groupIndex}>
              {sharedLogos.map((logo, index) => (
                <img
                  key={`${groupIndex}-${index}`}
                  src={logo}
                  className="logo-item"
                  alt={`Client logo ${index + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="about-services">
        <div className="column-b about-services-head reveal-on-scroll reveal-left">
          <PillCard label="My Services" />
          <h2 className="column-subtitle2 subtitle1">I offer multiple services guided by one clear vision</h2>
        </div>
        <div className="column-c about-services-list">
          {sharedServices.map((service) => <ServiceSection key={service.number} service={service} />)}
        </div>
      </section>

      <div className="col4">
        <div className="col5">
          <div className="row-d row-top2 reveal-on-scroll reveal-up">
            <div className="card-a card-left">
              <div className="card-circle1"></div>
              <h2 className="card-subtitle">My eXPERIENCE</h2>
            </div>
            <h2 className="row-subtitle2">Contributed to building digital products with</h2>
          </div>

          <div className="col6">
            {[
              ["Product Designer", "Business bUILDING", "March 2025 - present"],
              ["ui/ux Designer", "tECHNO MASR", "October 2024 - March 2025"],
              ["ui/ux Designer", "Awamer Al sHABAKA", "June 2023 - August 2024"],
              ["motion Graphics", "Mihad", "December 2022 - March 2023"],
              ["motion Graphics", "Serv5", "April 2022 - December 2022"]
            ].map((item, index) => (
              <div key={item[1]} className={index === 4 ? "row-bottom reveal-on-scroll reveal-up" : `row-e row${index + 5} reveal-on-scroll reveal-up`}>
                <div className="column-f">
                  <p className="column-text3">{item[0]}</p>
                  <h2 className="column-subtitle8">{item[1]}</h2>
                </div>
                <div className={index === 4 ? "row-f row-right2" : "row-f row-right"}>
                  <p className="row-text2">{item[2]}</p>
                  <div className="row-circle">
                    <object data="assets/component-row/component-arrow-right.svg" className="row-arrow-right" type="image/svg+xml"></object>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="column-d col7">
        <PillCard label="What clients say?" />

        <h2 className="column-subtitle6 subtitle1">
          LEARN WHAT CLIENTS APPRECIATE
          <br />
          MOST ABOUT OUR DESIGN
        </h2>
      </div>

      <div className="component-c component2 marquee-section">
        {testimonialRows.map((row, index) => (
          <TestimonialRow key={index} row={row} />
        ))}

        <div className="component-frame-b component-frame2"></div>
        <div className="component-frame-b component-frame3"></div>
      </div>

      <FooterSection className="column-e col8 reveal-on-scroll reveal-up" />
    </>
  );
}

createRoot(document.getElementById("root")).render(<AboutPage />);
