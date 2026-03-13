const { createRoot } = ReactDOM;

function PortfolioPage() {
  useScrollReveal();

  return (
    <>
      <div className="ellipse circle1"></div>
      <div className="ellipse circle2"></div>
      <div className="ellipse circle3"></div>
      <div className="ellipse ellipse1"></div>

      <SiteNav active="Portfolio" className="navbar" />

      <div className="row-d row3 reveal-on-scroll reveal-up">
        <div className="card-a card-left">
          <div className="card-circle1"></div>
          <h2 className="card-subtitle">My Projects</h2>
        </div>
        <h2 className="row-subtitle2">Take a closer look at my completed projects</h2>
      </div>

      <div className="col1">
        <div className="row-a row-top2">
          <ProjectCard project={sharedProjects[0]} frameClass="frame1" />
          <ProjectCard project={sharedProjects[1]} frameClass="frame2" />
        </div>
        <div className="row-b row4">
          <ProjectCard project={sharedProjects[2]} frameClass="frame3" />
          <ProjectCard project={sharedProjects[3]} frameClass="frame4" />
        </div>
        <div className="row-a row-bottom">
          <ProjectCard project={sharedProjects[0]} frameClass="frame1" />
          <ProjectCard project={sharedProjects[1]} frameClass="frame2" />
        </div>
      </div>

      <div className="column-d col2 reveal-on-scroll reveal-left">
        <PillCard label="What clients say?" className="card-a row-top" />
        <h2 className="column-subtitle6 subtitle1">Learn what clients appreciate most about our design</h2>
      </div>

      <TestimonialsSection wrapperClass="component-c component1 marquee-section reveal-on-scroll reveal-up" />

      <FooterSection className="column-e col3 reveal-on-scroll reveal-up" />
    </>
  );
}

createRoot(document.getElementById("root")).render(<PortfolioPage />);
