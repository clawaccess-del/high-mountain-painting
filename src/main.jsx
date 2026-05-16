import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '(541) 821-4128';
const phoneHref = 'tel:+15418214128';
const messagePhone = '(541) 821-4125';
const messageHref = 'sms:+15418214125';
const email = 'highmountainpaint@gmail.com';

const services = [
  ['Interior painting', 'Clean lines, protected floors and furnishings, careful wall repair, and rooms put back together with respect.'],
  ['Exterior repainting', 'Weather-aware prep, siding and trim coverage, caulking, scraping, priming, and durable finishes for Southern Oregon homes.'],
  ['Cabinets, doors, and trim', 'Smooth enamel finishes for high-touch surfaces that need a crisp, lasting result.'],
  ['Decks, fences, and outbuildings', 'Refresh outdoor spaces with stain, paint, and protective coatings built for sun, rain, and seasonal swings.'],
  ['Commercial touch-ups', 'Reliable painting for offices, rentals, shops, and property turnover work around Medford and the Rogue Valley.'],
  ['Color and finish guidance', 'Practical help choosing colors, sheens, and finishes that fit the home, light, and maintenance needs.'],
];

const areas = ['Medford', 'Central Point', 'Phoenix', 'Talent', 'Jacksonville', 'White City', 'Eagle Point', 'Ashland', 'Grants Pass', 'Southern Oregon'];

const projectImages = [
  {
    src: '/images/painted-home-1.png',
    alt: 'Freshly painted sage craftsman bungalow with cream trim',
    title: 'Craftsman color refresh',
    caption: 'Sage siding and cream trim bring out porch detail without making the home feel too dark.',
  },
  {
    src: '/images/painted-home-2.png',
    alt: 'Fresh white modern farmhouse with black trim',
    title: 'Modern farmhouse contrast',
    caption: 'White siding with black trim gives a cleaner profile and makes the rooflines feel sharper.',
  },
  {
    src: '/images/painted-home-3.png',
    alt: 'Warm taupe ranch home with crisp trim and shutters',
    title: 'Ranch home curb appeal',
    caption: 'Warm neutral siding updates a single-story exterior while keeping it natural for the neighborhood.',
  },
  {
    src: '/images/painted-home-4.png',
    alt: 'Blue-gray two-story home with bright white trim',
    title: 'Two-story trim definition',
    caption: 'Blue-gray siding and bright trim help windows, fascia, and entry details stand out from the street.',
  },
  {
    src: '/images/painted-home-5.png',
    alt: 'Forest green Northwest cottage with cream trim',
    title: 'Cottage exterior warmth',
    caption: 'Deep green paint, soft trim, and wood accents create a grounded Northwest look with personality.',
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <div className="top-logo-row">
          <a className="brand text-brand" href="#top" aria-label="High Mountain Painting home">
            <span className="brand-name">High Mountain Painting</span>
          </a>
        </div>
        <div className="header-nav-row">
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href={phoneHref}>Call {phone}</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Medford, Oregon painting contractor • CCB #96858</p>
          <h1>Fresh paint. Sharp lines. A home that feels cared for again.</h1>
          <p className="lead">High Mountain Painting helps Rogue Valley homeowners and property owners refresh interiors, protect exteriors, and finish every detail with steady communication from Travis and Sheryl Tibbets.</p>
          <div className="hero-actions">
            <a className="button primary" href={phoneHref}>Call for an estimate</a>
            <a className="button secondary" href={`mailto:${email}`}>Email the team</a>
          </div>
          <div className="trust-strip" aria-label="Company highlights">
            <span>Owner-led</span>
            <span>Interior & exterior</span>
            <span>Rogue Valley local</span>
          </div>
        </div>
        <div className="hero-card" aria-label="High Mountain Painting featured painted home">
          <div className="featured-home">
            <img src={projectImages[0].src} alt={projectImages[0].alt} />
          </div>
          <div className="quote-card logo-quote">
            <h2>High Mountain Painting</h2>
            <p>Home of all your painting needs</p>
            <a href={phoneHref}>{phone}</a>
            <small>Medford, OR • CCB #96858</small>
          </div>
        </div>
      </section>

      <section className="intro-panel">
        <div>
          <p className="section-kicker">Why homeowners call High Mountain</p>
          <h2>Good paint work starts before the first coat.</h2>
        </div>
        <p>From masking and surface repair to primer choice and final cleanup, every step affects how the finished job looks months and years later. High Mountain Painting keeps the process straightforward: inspect the surfaces, explain the prep, protect the property, and leave a finish that feels right the moment you walk in.</p>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading">
          <p className="section-kicker">Painting services</p>
          <h2>Interior, exterior, and detail painting for homes and properties.</h2>
        </div>
        <div className="service-grid">
          {services.map(([title, text]) => (
            <article className="service-card" key={title}>
              <span></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-pad" aria-label="Freshly painted home examples">
        <div className="section-heading">
          <p className="section-kicker">Fresh finish inspiration</p>
          <h2>Realistic painted-home visuals for the kind of clean curb appeal customers want.</h2>
        </div>
        <div className="portfolio-grid">
          {projectImages.map((image, index) => (
            <figure className={index === 0 ? 'portfolio-card large' : 'portfolio-card'} key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>
                <strong>{image.title}</strong>
                <span>{image.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="work" className="process section-pad">
        <div className="process-copy">
          <p className="section-kicker">A steadier painting experience</p>
          <h2>Clear scope. Careful prep. No mystery in the middle.</h2>
          <p>Painting projects can get stressful when communication is thin. High Mountain Painting keeps the job grounded with a simple walkthrough, a clear plan for surfaces and finishes, and practical updates as the work moves forward.</p>
        </div>
        <div className="steps">
          <div><b>01</b><h3>Walkthrough</h3><p>Review the rooms, exterior surfaces, trim, colors, timing, and access needs.</p></div>
          <div><b>02</b><h3>Prep</h3><p>Protect the property, repair problem areas, sand, scrape, caulk, patch, and prime where needed.</p></div>
          <div><b>03</b><h3>Finish</h3><p>Apply the right coating, clean the work area, and review the finished project with you.</p></div>
        </div>
      </section>

      <section className="local section-pad">
        <div className="local-card">
          <p className="section-kicker">Service area</p>
          <h2>Based in Medford. Serving the Rogue Valley and Southern Oregon.</h2>
          <div className="area-list">
            {areas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-copy">
          <p className="section-kicker">Get an estimate</p>
          <h2>Ready to refresh the house, rental, shop, or exterior?</h2>
          <p>Call, text, or email High Mountain Painting with the project address, the surfaces you want painted, and any timing needs. Photos are helpful if you have them.</p>
        </div>
        <div className="contact-card">
          <h3>High Mountain Painting</h3>
          <p>Travis and Sheryl Tibbets, Owners</p>
          <a href={phoneHref}>Call {phone}</a>
          <a href={messageHref}>Message {messagePhone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <small>Oregon CCB #96858</small>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} High Mountain Painting. Medford, Oregon.</p>
        <p><a href={phoneHref}>{phone}</a> · <a href={`mailto:${email}`}>{email}</a> · CCB #96858</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
