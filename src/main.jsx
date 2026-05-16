import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '(541) 821-4128';
const phoneHref = 'tel:+15418214128';
const messagePhone = '(541) 821-4125';
const messageHref = 'sms:+15418214125';
const email = 'highmountainpaint@gmail.com';
const siteUrl = 'https://high-mountain-painting.vercel.app';

const servicePages = [
  {
    slug: 'interior-painting-medford-or',
    nav: 'Interior',
    title: 'Interior Painting in Medford, Oregon',
    shortTitle: 'Interior painting',
    meta: 'Interior painting in Medford, Oregon for walls, ceilings, trim, doors, rentals, repaints, and room refreshes by High Mountain Painting.',
    intro: 'Refresh the rooms you live in every day with clean lines, protected spaces, practical prep, and a finish that feels calm, crisp, and complete.',
    image: projectImagePath(1),
    alt: 'Freshly painted interior-inspired home exterior by High Mountain Painting',
    bullets: ['Walls, ceilings, doors, baseboards, and trim', 'Drywall patching, sanding, masking, and careful prep', 'Color and sheen guidance for busy rooms and natural light', 'Clean job sites, protected floors, and respectful scheduling'],
    sections: [
      ['Interior painting that respects the home', 'Interior work is personal. Floors, furniture, pets, schedules, and daily routines all matter. High Mountain Painting plans each room around clean protection, steady communication, and a final walkthrough so the project feels organized from start to finish.'],
      ['Prep that improves the finish', 'Small dents, rough patches, caulk gaps, nail holes, and old roller texture can show through fresh paint. The team focuses on the surface before the color goes on, because better prep is what gives walls and trim a smoother, longer-lasting result.'],
      ['Good fit for Rogue Valley homes', 'Medford homes deal with bright sun, dust, seasonal temperature swings, and lived-in spaces that need durable finishes. High Mountain Painting helps select paints and sheens that fit bedrooms, kitchens, bathrooms, hallways, rentals, and high-traffic family areas.'],
    ],
    faqs: [
      ['Do you help with interior paint colors?', 'Yes. High Mountain Painting can help narrow down colors and sheens based on light, room use, trim color, and the feeling you want in the space.'],
      ['Can you paint trim and doors too?', 'Yes. Walls, ceilings, doors, baseboards, and trim can be included in the project scope.'],
      ['How should I prepare before interior painting?', 'Move small personal items when possible. The team can discuss furniture protection, access, timing, and any repairs during the estimate.'],
    ],
  },
  {
    slug: 'exterior-painting-medford-or',
    nav: 'Exterior',
    title: 'Exterior Painting in Medford, Oregon',
    shortTitle: 'Exterior repainting',
    meta: 'Exterior house painting in Medford and Southern Oregon, including siding, trim, fascia, doors, prep, caulking, priming, and repaint work.',
    intro: 'Protect the outside of the home with weather-aware prep, durable coatings, crisp trim, and colors that fit Southern Oregon curb appeal.',
    image: projectImagePath(4),
    alt: 'Blue-gray two-story home with crisp exterior painting',
    bullets: ['Siding, trim, fascia, doors, shutters, and accents', 'Scraping, sanding, caulking, spot priming, and surface repair', 'Paint systems selected for sun, rain, and seasonal movement', 'Curb appeal updates for homes, rentals, and property turnovers'],
    sections: [
      ['Exterior paint is protection first', 'A good exterior paint job does more than change color. It helps protect siding, trim, fascia, and entry details from moisture, UV exposure, and everyday weathering. High Mountain Painting looks for the prep issues that affect durability before coating begins.'],
      ['Built around Southern Oregon conditions', 'Medford and the Rogue Valley bring hot sun, smoke season residue, winter moisture, and big temperature shifts. Exterior painting needs the right timing, the right surface prep, and coatings chosen for the material being painted.'],
      ['Better curb appeal without guesswork', 'From classic neutrals to stronger mountain-inspired palettes, the team can help choose exterior colors that fit the home style, roof tone, landscaping, and neighborhood.'],
    ],
    faqs: [
      ['When is the best time to paint an exterior in Medford?', 'Exterior painting depends on temperature, moisture, surface condition, and forecast. Spring through fall is common, but the right window depends on the project.'],
      ['Do you handle scraping and caulking?', 'Yes. Scraping, sanding, caulking, spot priming, and basic prep are part of building a reliable exterior finish.'],
      ['Can you paint trim separately from siding?', 'Yes. Trim refreshes, fascia, doors, shutters, and accent areas can be scoped separately when a full repaint is not needed.'],
    ],
  },
  {
    slug: 'cabinet-trim-painting-medford-or',
    nav: 'Cabinets & Trim',
    title: 'Cabinet, Door, and Trim Painting in Medford, Oregon',
    shortTitle: 'Cabinets, doors, and trim',
    meta: 'Cabinet painting, door painting, and trim painting in Medford, Oregon with smooth prep, durable finishes, and crisp detail work.',
    intro: 'Give high-touch surfaces a smoother, cleaner finish with careful sanding, masking, coating, and detail work.',
    image: projectImagePath(2),
    alt: 'Fresh white modern farmhouse with crisp black trim',
    bullets: ['Kitchen cabinet refreshes and built-ins', 'Doors, baseboards, casing, window trim, and accent trim', 'Sanding, deglossing, priming, and enamel finish planning', 'Clean masking for sharp edges and protected surfaces'],
    sections: [
      ['Detail work changes the whole room', 'Cabinets, doors, and trim catch the eye because they frame the space. When they look tired, the whole room can feel unfinished. High Mountain Painting focuses on clean prep and controlled application for a sharper final result.'],
      ['Durability matters on high-touch surfaces', 'Cabinets, doors, and trim get touched, bumped, wiped, and cleaned. The right primer, coating, sheen, and cure time matter more here than on many wall surfaces.'],
      ['A practical way to update without replacing', 'Painting cabinets or trim can change the feel of a kitchen, bath, entry, or living area without a full remodel. It is a strong option when the layout works but the finish feels dated.'],
    ],
    faqs: [
      ['Can painted cabinets look smooth?', 'Yes, with proper cleaning, sanding, priming, and finish selection. The exact result depends on the current cabinet material and condition.'],
      ['Do you paint stained trim?', 'Often, yes. Stained trim usually needs cleaning, sanding or deglossing, and the right primer before paint.'],
      ['Can doors be included with interior painting?', 'Yes. Doors and trim can be included as part of a larger interior project or scoped as a focused detail project.'],
    ],
  },
  {
    slug: 'deck-fence-painting-staining-medford-or',
    nav: 'Decks & Fences',
    title: 'Deck, Fence, and Outdoor Surface Painting in Medford, Oregon',
    shortTitle: 'Decks, fences, and outbuildings',
    meta: 'Deck painting, fence staining, outbuilding painting, and outdoor surface refreshes for Medford, Oregon and the Rogue Valley.',
    intro: 'Refresh outdoor spaces with stain, paint, and protective coatings that fit the surface, exposure, and Southern Oregon weather.',
    image: projectImagePath(5),
    alt: 'Forest green Northwest cottage with warm exterior paint',
    bullets: ['Decks, fences, gates, sheds, shops, and outbuildings', 'Surface cleaning, sanding, scraping, and coating recommendations', 'Paint and stain options for wood exposure and maintenance goals', 'Color choices that connect the home, yard, and outdoor structures'],
    sections: [
      ['Outdoor surfaces take a beating', 'Decks, fences, sheds, and outbuildings sit in direct sun, rain, dust, and temperature changes. A good refresh starts with understanding the condition of the surface and whether paint, solid stain, or a more transparent finish makes sense.'],
      ['Prep helps coatings last longer', 'Loose coating, rough wood, moisture exposure, and failing edges need attention before a new finish goes on. High Mountain Painting helps identify what needs cleaning, sanding, scraping, or priming.'],
      ['Make the yard feel more finished', 'A freshly finished fence, deck, or outbuilding can make the entire property feel cleaner and more cared for, especially when the color ties back to the house trim or siding.'],
    ],
    faqs: [
      ['Do you paint fences and sheds?', 'Yes. Fences, gates, sheds, shops, and other outbuildings can be reviewed and included in the scope.'],
      ['Is paint or stain better for a deck?', 'It depends on the wood, existing coating, sun exposure, and maintenance goals. High Mountain Painting can recommend the better direction after seeing the surface.'],
      ['Can outdoor painting be scheduled around weather?', 'Yes. Weather, temperature, and surface dryness are important for outdoor coating work.'],
    ],
  },
  {
    slug: 'commercial-painting-medford-or',
    nav: 'Commercial',
    title: 'Commercial Painting and Property Touch-Ups in Medford, Oregon',
    shortTitle: 'Commercial touch-ups',
    meta: 'Commercial painting, office painting, rental repainting, and property touch-ups for businesses and property owners in Medford, Oregon.',
    intro: 'Keep offices, rentals, shops, and small commercial spaces looking clean, professional, and ready for customers or tenants.',
    image: projectImagePath(3),
    alt: 'Warm taupe ranch-style property with refreshed exterior paint',
    bullets: ['Offices, shops, rentals, turnovers, and light commercial spaces', 'Interior repainting, exterior touch-ups, trim, doors, and accent areas', 'Professional scheduling and clear communication for occupied spaces', 'Durable finishes for traffic, cleaning, and frequent use'],
    sections: [
      ['Professional spaces need practical painting', 'Commercial and rental painting often has a different goal than a personal home project: make the space clean, consistent, durable, and ready to use with as little disruption as possible.'],
      ['Good for property owners and small businesses', 'High Mountain Painting can help with office refreshes, shop touch-ups, rental turnover painting, exterior details, and targeted repainting that improves the first impression without overcomplicating the job.'],
      ['Clear scope keeps the project moving', 'Before work starts, the team can review access, business hours, tenant needs, surfaces, colors, and priority areas so the project has a clear path.'],
    ],
    faqs: [
      ['Do you work on rental turnovers?', 'Yes. Rental repainting and touch-ups can be scoped for property owners who need a cleaner, ready-to-show space.'],
      ['Can you paint after business hours?', 'Scheduling needs can be discussed during the estimate, depending on project size and access.'],
      ['Do you handle small commercial jobs?', 'Yes. Offices, shops, small commercial interiors, exterior touch-ups, and detail work are a good fit.'],
    ],
  },
  {
    slug: 'paint-color-consultation-medford-or',
    nav: 'Color Help',
    title: 'Paint Color and Finish Guidance in Medford, Oregon',
    shortTitle: 'Color and finish guidance',
    meta: 'Paint color help and finish guidance for Medford homes, including interior colors, exterior palettes, trim contrast, and sheen selection.',
    intro: 'Choose colors, trim contrast, and finishes with more confidence before the first gallon is opened.',
    image: projectImagePath(1),
    alt: 'Sage craftsman color refresh with cream trim',
    bullets: ['Interior color direction for light, layout, and room use', 'Exterior palettes that fit roof tones, landscaping, and neighborhood style', 'Trim, door, accent, and cabinet color coordination', 'Sheen recommendations for durability, cleanup, and appearance'],
    sections: [
      ['Color choices affect the whole project', 'Paint color is not just personal taste. Light, roof color, flooring, cabinetry, landscaping, and neighboring homes all change how a color reads. Guidance helps avoid surprises after the paint is on the wall or siding.'],
      ['Finish and sheen matter too', 'Flat, eggshell, satin, semi-gloss, and enamel finishes all behave differently. The best choice depends on the surface, traffic, cleaning needs, and how much shine you want to see.'],
      ['A more confident estimate conversation', 'When color direction is clearer early, the estimate and project plan are easier to finalize. High Mountain Painting can help narrow options around the home and the surfaces being painted.'],
    ],
    faqs: [
      ['Can you help choose exterior colors?', 'Yes. Exterior color guidance can account for roof color, stone, landscaping, trim, sun exposure, and neighborhood fit.'],
      ['What sheen should I use inside?', 'It depends on the room. High-traffic spaces usually need more durability, while lower-traffic rooms can often use softer finishes.'],
      ['Can trim be a different color?', 'Yes. Trim contrast is one of the easiest ways to make a home feel sharper and more intentional.'],
    ],
  },
];

function projectImagePath(number) {
  return `/images/painted-home-${number}.png`;
}

const services = servicePages.map((service) => [service.shortTitle, service.intro, `/services/${service.slug}`]);
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

function setMeta(title, description, path = '/') {
  useEffect(() => {
    document.title = `${title} | High Mountain Painting`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${siteUrl}${path}`);
  }, [title, description, path]);
}

function Header() {
  return (
    <header className="site-header">
      <div className="top-logo-row">
        <a className="brand text-brand" href="/" aria-label="High Mountain Painting home">
          <span className="brand-name">High Mountain Painting</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobile-menu-panel">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            {servicePages.map((service) => (
              <a href={`/services/${service.slug}`} key={service.slug}>{service.nav}</a>
            ))}
            <a href="/#contact">Contact</a>
            <a href={phoneHref}>Call {phone}</a>
          </div>
        </details>
      </div>
      <div className="header-nav-row">
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          {servicePages.map((service) => (
            <a href={`/services/${service.slug}`} key={service.slug}>{service.nav}</a>
          ))}
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-call" href={phoneHref}>Call {phone}</a>
      </div>
    </header>
  );
}

function HomePage() {
  setMeta('Medford, Oregon Painters', 'High Mountain Painting serves Medford and Southern Oregon with interior painting, exterior painting, trim, cabinet, deck, fence, commercial, and repaint services.', '/');
  return (
    <>
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
          {services.map(([title, text, href]) => (
            <a className="service-card service-link-card" href={href} key={title}>
              <span></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>View service page</b>
            </a>
          ))}
        </div>
      </section>

      <PortfolioSection />
      <ProcessSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}

function PortfolioSection() {
  return (
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
  );
}

function ProcessSection() {
  return (
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
  );
}

function ServiceAreaSection() {
  return (
    <section className="local section-pad">
      <div className="local-card">
        <p className="section-kicker">Service area</p>
        <h2>Based in Medford. Serving the Rogue Valley and Southern Oregon.</h2>
        <div className="area-list">
          {areas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
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
  );
}

function ServicePage({ service }) {
  setMeta(service.title, service.meta, `/services/${service.slug}`);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.meta,
    areaServed: areas,
    provider: {
      '@type': 'LocalBusiness',
      name: 'High Mountain Painting',
      telephone: phone,
      email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Medford',
        addressRegion: 'OR',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <section className="service-hero section-pad">
        <div>
          <p className="eyebrow">High Mountain Painting • Medford, OR</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href={phoneHref}>Call for an estimate</a>
            <a className="button secondary" href="/#services">View all services</a>
          </div>
        </div>
        <figure className="service-hero-image">
          <img src={service.image} alt={service.alt} />
          <figcaption>{service.shortTitle} for Medford and Southern Oregon properties.</figcaption>
        </figure>
      </section>

      <section className="service-page section-pad">
        <aside className="service-sidebar">
          <h2>Service highlights</h2>
          <ul>
            {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <a className="button primary" href={phoneHref}>Call {phone}</a>
        </aside>
        <div className="service-content">
          {service.sections.map(([heading, body]) => (
            <article key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section-pad">
        <div className="section-heading">
          <p className="section-kicker">Helpful answers</p>
          <h2>{service.shortTitle} questions</h2>
        </div>
        <div className="faq-grid">
          {service.faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}

function NotFoundPage() {
  setMeta('Page Not Found', 'High Mountain Painting page not found.', window.location.pathname);
  return (
    <section className="service-hero section-pad">
      <div>
        <p className="eyebrow">Page not found</p>
        <h1>That page is not on the site.</h1>
        <p className="lead">Use the service links in the navigation or return to the homepage.</p>
        <a className="button primary" href="/">Go home</a>
      </div>
    </section>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const service = servicePages.find((item) => `/services/${item.slug}` === path);

  return (
    <main>
      <Header />
      {path === '/' ? <HomePage /> : service ? <ServicePage service={service} /> : <NotFoundPage />}
      <footer>
        <p>© {new Date().getFullYear()} High Mountain Painting. Medford, Oregon.</p>
        <p><a href={phoneHref}>{phone}</a> · <a href={`mailto:${email}`}>{email}</a> · CCB #96858</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
