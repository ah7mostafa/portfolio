const sharedLogos = ["assets/logo1.png", "assets/logo2.png", "assets/logo3.png"];

const sharedProjects = [
  { image: "assets/component/component-product-img.png", title: "Nabaa app", date: "Jan 2025" },
  { image: "assets/component/component-product-img2.png", title: "Nabaa app", date: "Jan 2025" },
  { image: "assets/component/component-product-img2.png", title: "Nabaa app", date: "Jan 2025" },
  { image: "assets/component/component-product-img.png", title: "Nabaa app", date: "Jan 2025" }
];

const sharedServices = [
  {
    number: "01",
    title: "UI APPS",
    layout: "column",
    leftClass: "column-row-left1",
    innerClass: "column-row-left2",
    textClass: "column-text-hero1",
    elementsClass: "column-elements1",
    rightClass: "column-row-right1",
    sectionClass: "column-row1 service-card",
    tags: [
      { label: "iOS & Android Interfaces", className: "btn btn1 hover-zoom" },
      { label: "UX Research", className: "btn btn2 hover-zoom", iconClass: "btn-icon" },
      { label: "Wireframing & Prototyping", className: "column-row2 card2", staticCard: true, textClass: "column-text-hero2", circleClass: "column-circle-left1" },
      { label: "User Flow Mapping", className: "btn btn3 hover-zoom" }
    ]
  },
  {
    number: "02",
    title: "UI WEBSITES",
    layout: "column",
    leftClass: "column-row-left3",
    innerClass: "column-row-left4",
    textClass: "column-text-hero3",
    elementsClass: "column-elements2",
    rightClass: "column-row-right2",
    sectionClass: "column-row3 service-card",
    tags: [
      { label: "Responsive", className: "btn btn4 hover-zoom", iconClass: "btn-icon" },
      { label: "Website UI Strategy", className: "btn btn5 hover-zoom" },
      { label: "Information Architecture", className: "column-row4 card2", staticCard: true, textClass: "column-text-hero4", circleClass: "column-circle-left2" },
      { label: "Landing Page", className: "btn btn6 hover-zoom", iconClass: "btn-icon" }
    ]
  },
  {
    number: "03",
    title: "UI DASHBOARDS",
    layout: "row",
    sectionClass: "row-c row1 service-card",
    tags: [
      { label: "SaaS Dashboard", className: "btn btn7 hover-zoom", iconClass: "btn-icon" },
      { label: "Admin Panel UI", className: "btn btn8 hover-zoom", iconClass: "btn-icon" },
      { label: "Analytics Interface", className: "btn btn9 hover-zoom" },
      { label: "Complex System UX", className: "btn btn10 hover-zoom" }
    ]
  },
  {
    number: "04",
    title: "DESIGN SYSTEM",
    layout: "column",
    leftClass: "column-row-left5",
    innerClass: "column-row-left6",
    textClass: "column-text-hero5",
    elementsClass: "column-elements3",
    rightClass: "column-row-right3",
    sectionClass: "column-row5 service-card",
    tags: [
      { label: "Design Tokens", className: "btn btn11 hover-zoom", iconClass: "btn-icon" },
      { label: "UI Component Library", className: "btn btn12 hover-zoom" },
      { label: "Scalable Design Systems", className: "btn btn13 hover-zoom" },
      { label: "Style Guidelines", className: "btn btn14 hover-zoom", iconClass: "btn-icon" }
    ]
  },
  {
    number: "05",
    title: "2D ANIMATION",
    layout: "row",
    sectionClass: "row-c row2 service-card",
    tags: [
      { label: "Logo Animation", className: "btn btn7 hover-zoom", iconClass: "btn-icon" },
      { label: "UI Motion Design", className: "btn btn8 hover-zoom", iconClass: "btn-icon" },
      { label: "Animated Onboarding", className: "btn btn9 hover-zoom" },
      { label: "Micro-Interactions", className: "btn btn10 hover-zoom" }
    ]
  }
];

const sharedTestimonialRows = [
  {
    rowClass: "frame-a frame5 marquee-right",
    testimonials: [
      { text: "I'm Ahmed Atya, a UI/UX Designer with a background in Motion Graphics. I create user centered designs that drive engagement.", name: "Ahmed Mostafa", title: "CEO @ BB4IT", avatar: "assets/column-row/column-img-circle.png" },
      { text: "The product I design are a reflection of my thinking. Solving problems with simple visuals is my core strength.", name: "Mohamed Ali", title: "Creative Director", avatar: "assets/column-row/column-img-circle.png" },
      { text: "High quality interfaces that turn complex problems into simple solutions. Every project is approached with focus.", name: "Sarah Jonas", title: "Product Manager", avatar: "assets/column-row/column-img-circle.png" }
    ]
  },
  {
    rowClass: "frame-a frame6 marquee-left",
    testimonials: [
      { text: "Working with Ahmed was a game changer for our business. The UI is stunning and easy to use.", name: "Jessica Ray", title: "Tech Lead", avatar: "assets/column-row/column-img-circle.png" },
      { text: "The best design services I have ever used. Highly professional, creative, and reliable.", name: "Kareem Helmy", title: "Startup Founder", avatar: "assets/column-row/column-img-circle.png" },
      { text: "Ahmed has a unique eye for animation and user flow. Our users love the new experience.", name: "Layla Smith", title: "Lead UX", avatar: "assets/column-row/column-img-circle.png" }
    ]
  }
];

function SiteNav({ active, className = "navbar" }) {
  return (
    <nav className={`site-nav ${className}`.trim()} aria-label="Primary navigation">
      <a href="home.html" className="site-nav-brand">
        <span>AHMED ATYA</span>
      </a>
      <div className="site-nav-links">
        <a href="home.html" className={`site-nav-link ${active === "Home" ? "active" : ""}`.trim()}>Home</a>
        <a href="about-me.html" className={`site-nav-link ${active === "About" ? "active" : ""}`.trim()}>About</a>
        <a href="portfolio.html" className={`site-nav-link ${active === "Portfolio" ? "active" : ""}`.trim()}>Portfolio</a>
        <a href="contact.html" className={`site-nav-link ${active === "Contact" ? "active" : ""}`.trim()}>Contact</a>
      </div>
    </nav>
  );
}

function ActionCard({ text, icon, className = "card-b", iconClass = "card-arrow-right", href }) {
  const content = (
    <>
      <div className="card-circle2">
        <object data={icon} className={`message ${iconClass}`} type="image/svg+xml"></object>
      </div>
      <p className="card-text">{text}</p>
    </>
  );

  if (href) {
    return <a href={href} className={`${className} card-link`}>{content}</a>;
  }

  return <div className={className}>{content}</div>;
}

function PillCard({ label, className = "card-a card-top3" }) {
  return (
    <div className={className}>
      <div className="card-circle1"></div>
      <h2 className="card-subtitle">{label}</h2>
    </div>
  );
}

function ProjectCard({ project, frameClass, revealClass = "reveal-up" }) {
  return (
    <div className={`component-b ${frameClass} reveal-on-scroll ${revealClass}`.trim()}>
      <img src={project.image} className="component-product-img" alt={project.title} />
      <div className="component-row-bottom">
        <div className="component-col">
          <h2 className="component-subtitle">{project.title}</h2>
          <p className="component-text-product">{project.date}</p>
        </div>
        <div className="component-row-right">
          <p className="component-text-hero">See More</p>
          <object data="assets/component-row/component-arrow-right.svg" className="component-arrow-right" type="image/svg+xml"></object>
        </div>
      </div>
    </div>
  );
}

function ServiceTag({ tag }) {
  if (tag.staticCard) {
    return (
      <div className={tag.className}>
        <div className={`icon-circle ${tag.circleClass}`}></div>
        <p className={`label-hero-header ${tag.textClass}`}>{tag.label}</p>
      </div>
    );
  }

  return (
    <button className={tag.className}>
      <div className={`icon-circle ${tag.iconClass || ""}`.trim()}></div>
      <p className="label-hero-header btn-label">{tag.label}</p>
    </button>
  );
}

function ServiceSection({ service }) {
  const revealClass = service.number === "01" || service.number === "03" || service.number === "05" ? "reveal-left" : "reveal-right";
  if (service.layout === "row") {
    return (
      <div className={`${service.sectionClass} reveal-on-scroll ${revealClass}`}>
        <div className="row-row-left1">
          <div className="row-row-left2">
            <p className="row-text1">{service.number}</p>
            <object data="assets/row/column-elements.svg" className="row-elements" type="image/svg+xml"></object>
          </div>
          <h2 className="row-subtitle1 subtitle2">{service.title}</h2>
        </div>
        <div className="row-row-right service-tags">
          {service.tags.map((tag) => <ServiceTag key={tag.label} tag={tag} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={`${service.sectionClass} reveal-on-scroll ${revealClass}`}>
      <div className={service.leftClass}>
        <div className={service.innerClass}>
          <p className={service.textClass}>{service.number}</p>
          <object data="assets/row/column-elements.svg" className={service.elementsClass} type="image/svg+xml"></object>
        </div>
        <h2 className={`subtitle2 ${service.title === "UI APPS" ? "column-subtitle3" : service.title === "UI WEBSITES" ? "column-subtitle4" : "column-subtitle5"}`}>{service.title}</h2>
      </div>
      <div className={`${service.rightClass} service-tags`}>
        {service.tags.map((tag) => <ServiceTag key={tag.label} tag={tag} />)}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card reveal-on-scroll reveal-up">
      <div className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="user-info">
        <img src={testimonial.avatar} className="user-avatar" alt={testimonial.name} />
        <div className="user-details">
          <h4 className="user-name">{testimonial.name}</h4>
          <p className="user-title">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialRow({ row }) {
  return (
    <div className={row.rowClass}>
      {[0, 1].map((copyIndex) => (
        <div className="marquee-content" key={copyIndex}>
          {row.testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${copyIndex}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      ))}
    </div>
  );
}

function TestimonialsSection({ wrapperClass = "component-c component2 marquee-section reveal-on-scroll reveal-up" }) {
  return (
    <div className={wrapperClass}>
      {sharedTestimonialRows.map((row, index) => <TestimonialRow key={index} row={row} />)}
      <div className="component-frame-b component-frame2"></div>
      <div className="component-frame-b component-frame3"></div>
    </div>
  );
}

function FooterSection({ className = "column-e col8 reveal-on-scroll reveal-up" }) {
  return (
    <div className={className}>
      <div className="column-row6">
        <h2 className="column-subtitle7">
          LET'S DISCUSS YOUR
          <br />
          PROJECT AND GOALS
        </h2>
        <ActionCard text="Contact US" icon="assets/card-circle/card-message.svg" className="card-b card3" href="contact.html" />
      </div>
      <div className="column-row7">
        <div className="column-col-left">
          <p className="column-text-hero6">QUICK LINKS</p>
          <div className="column-links">
            <a href="home.html" className="column-text-a">Home</a>
            <a href="about-me.html" className="column-text-a">About</a>
            <a href="portfolio.html" className="column-text-a">Portfolio</a>
            <a href="contact.html" className="column-text-a">Contact</a>
          </div>
        </div>
        <div className="circle-frame circle-frame1">
          <object data="assets/card-circle/card-arrow-right.svg" className="arrow-right circle-frame-arrow-right" type="image/svg+xml"></object>
        </div>
        <div className="column-row-right4">
          <p className="column-text-hero7">Social Media</p>
          <div className="column-row8">
            <img src="assets/column-row/column-img-circle.png" className="column-img-circle" alt="Social icon 1" />
            <img src="assets/column-row/column-img-circle2.png" className="column-img-circle" alt="Social icon 2" />
            <img src="assets/column-row/column-img-circle3.png" className="column-img-circle" alt="Social icon 3" />
            <img src="assets/column-row/column-img-circle4.png" className="column-img-circle" alt="Social icon 4" />
          </div>
        </div>
      </div>
      <h1 className="column-title title">AHMED ATYA</h1>
    </div>
  );
}

function useScrollReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
