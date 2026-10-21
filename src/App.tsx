import { useState } from "react"

type IconName = "arrow" | "phone" | "menu" | "close" | "star" | "users" | "party" | "briefcase"

function Icon({ name, size = 22 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    star: (
      <path d="m12 2.5 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.1l6.2-.9L12 2.5Z" />
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    party: (
      <>
        <path d="m4 22 5-14 7 7-12 7Z" />
        <path d="M9 8c1-4 5-5 8-3M16 15c4-1 5-5 3-8M14 2v2M22 10h-2" />
      </>
    ),
    briefcase: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const experiences = [
  {
    eyebrow: "01 / Find the way out",
    title: "Escape Rooms",
    image:
      "https://cms.breakout.in/uploads/images/escaperoom_0060d77c-b730-4f67-b673-d31b690274ac.png",
    links: ["Koramangala", "Whitefield", "JP Nagar", "Virtual Rooms"],
    tone: "acid",
  },
  {
    eyebrow: "02 / Make it unforgettable",
    title: "Parties",
    image:
      "https://cms.breakout.in/uploads/images/dsd_097ab8c9-6107-4a04-b482-5f510649a676.jpg",
    links: ["Birthdays", "Bachelor(ette)", "Farewells"],
    tone: "ember",
  },
  {
    eyebrow: "03 / Unleash the team",
    title: "Corporate",
    image:
      "https://cms.breakout.in/uploads/images/xc_ae0473f9-dda5-4408-ab5d-0716643552fb.jpg",
    links: ["Unwind", "Retreat", "Connect L&D"],
    tone: "blood",
  },
]

const locations = [
  {
    name: "Koramangala",
    tag: "The original lair",
    image:
      "https://cms.breakout.in/uploads/images/chatgpt-image-jul-14-2026-032933-pm_ae279363-e4e4-4795-96b9-05297e70bbf6.png",
  },
  {
    name: "Whitefield",
    tag: "Enter the unknown",
    image:
      "https://cms.breakout.in/uploads/images/e8f98813-9b2b-4813-9d5b-312f7db969cf-2_89f9c9e1-0d08-4ec4-8351-f36a78b49eb9.png",
  },
  {
    name: "JP Nagar",
    tag: "Fear lives here",
    image:
      "https://cms.breakout.in/uploads/images/011ec540-7e5e-4f16-97e0-48fb41cc19d5_003f3701-29e8-4306-a39f-176c73186f8b.png",
  },
  {
    name: "Go Virtual",
    tag: "No walls. No mercy.",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/801/086/non_2x/the-hallway-of-the-horror-building-is-very-scary-and-ghost-sightings-behind-the-door-ai-generated-free-photo.jpeg",
  },
]

const faqs = [
  [
    "What can you do at Breakout®?",
    "Step into cinematic escape rooms, host an unforgettable celebration, or put your team through immersive challenges built around wit, nerve and collaboration.",
  ],
  [
    "Are the escape rooms actually scary?",
    "Every room has its own intensity. Some are eerie and atmospheric, others lean into mystery and adventure. Our team can help you choose the right level for your group.",
  ],
  [
    "Are Breakout® escape rooms suitable for groups?",
    "Absolutely. The experience is designed for groups to solve clues, uncover secrets and race the clock together. No special skills are needed—only curiosity and teamwork.",
  ],
  [
    "Does Breakout® offer corporate team building?",
    "Yes. Our corporate programs turn communication and problem-solving into a high-energy shared story your team will talk about long after the clock stops.",
  ],
  [
    "Is Breakout® a good option for birthday parties?",
    "Yes. We build immersive birthday experiences for kids, teens and adults—an unforgettable alternative to the usual cake-and-dinner routine.",
  ],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Breakout home">
          <span className="brand-mark">B</span>
          <span>
            BREAKOUT<sup>®</sup>
          </span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>
            Escape Rooms
          </a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>
            Parties
          </a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>
            Corporate
          </a>
          <a href="#locations" onClick={() => setMenuOpen(false)}>
            Locations
          </a>
        </div>
        <div className="nav-actions">
          <a
            className="nav-phone"
            href="tel:+919742386781"
            aria-label="Call Breakout"
          >
            <Icon name="phone" />
          </a>
          <a className="button button-small" href="#book">
            Book now <Icon name="arrow" size={18} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <p className="kicker">Bangalore's most immersive experiences</p>
        <h1>
          Tonight, you
          <br />
          <em>break out.</em>
        </h1>
        <p className="hero-copy">
          Escape the ordinary. Outsmart the room. Make a memory that follows you
          home.
        </p>
        <a className="button hero-button" href="#experiences">
          Choose your adventure <Icon name="arrow" />
        </a>
        <div className="scroll-cue">
          <span>Scroll to enter</span>
          <i />
        </div>
      </header>

      <section className="experiences section" id="experiences">
        <div className="section-heading">
          <p className="kicker">Set yourself free</p>
          <h2>
            Three ways to <em>disappear.</em>
          </h2>
          <p>Choose your kind of chaos. We'll take care of the rest.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article
              className={`experience-card ${item.tone}`}
              key={item.title}
            >
              <div className="card-image-wrap">
                <img src={item.image} alt={`${item.title} at Breakout`} />
                <div className="image-shade" />
                <span>{item.eyebrow}</span>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.links.map((link) => (
                    <li key={link}>
                      <a href="#book">
                        {link}
                        <Icon name="arrow" size={19} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section">
        <p className="kicker">This is not a game night</p>
        <p className="manifesto-copy">
          At Breakout®, you don't just watch the story.{" "}
          <strong>You step inside it.</strong> Decode the impossible in
          cinematic escape rooms, celebrate milestones in another world, and
          turn teams into legends.
        </p>
        <a className="text-link" href="#story">
          Discover our story <Icon name="arrow" size={18} />
        </a>
      </section>

      <section className="proof section">
        <div className="proof-intro">
          <p className="kicker">Trusted by thousands</p>
          <h2>
            They escaped.
            <br />
            <em>They came back.</em>
          </h2>
          <div className="rating" aria-label="Rated 4.8 out of 5">
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon name="star" size={22} key={star} />
              ))}
            </div>
            <span>
              <strong>4.8</strong> / 5 on Google
            </span>
          </div>
        </div>
        <div className="stats">
          <div>
            <Icon name="users" />
            <strong>10.5K+</strong>
            <span>Joyful reviews</span>
          </div>
          <div>
            <Icon name="party" />
            <strong>1,657+</strong>
            <span>Parties hosted</span>
          </div>
          <div>
            <Icon name="briefcase" />
            <strong>850+</strong>
            <span>Companies served</span>
          </div>
        </div>
      </section>

      <section className="press" aria-label="Featured in">
        <p>As seen in</p>
        <div className="press-list">
          <span>THE ECONOMIC TIMES</span>
          <span>THE NEW INDIAN EXPRESS</span>
          <span>FINANCIAL EXPRESS</span>
          <span>DECCAN HERALD</span>
          <span>BANGALORE MIRROR</span>
        </div>
      </section>

      <section className="locations section" id="locations">
        <div className="section-heading horizontal">
          <div>
            <p className="kicker">Pick your portal</p>
            <h2>
              Visit a <em>location.</em>
            </h2>
          </div>
          <p>
            Four ways in.
            <br />
            Only one way out.
          </p>
        </div>
        <div className="location-grid">
          {locations.map((location, index) => (
            <a className="location-card" href="#book" key={location.name}>
              <img src={location.image} alt={location.name} />
              <div className="location-overlay" />
              <span className="location-num">0{index + 1}</span>
              <div>
                <small>{location.tag}</small>
                <h3>{location.name}</h3>
              </div>
              <span className="round-arrow">
                <Icon name="arrow" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="faq section">
        <div className="section-heading">
          <p className="kicker">Before you enter</p>
          <h2>
            Questions from <em>the brave.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div
              className={`faq-item ${openFaq === index ? "open" : ""}`}
              key={question}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span>
                  <small>0{index + 1}</small>
                  {question}
                </span>
                <i>{openFaq === index ? "−" : "+"}</i>
              </button>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta section" id="book">
        <div className="cta-eyeball" aria-hidden="true">
          <span />
        </div>
        <p className="kicker">The clock is already ticking</p>
        <h2>
          Ready to find out
          <br />
          what you're <em>made of?</em>
        </h2>
        <p>Choose your experience. Bring your people. We'll lock the door.</p>
        <a className="button" href="mailto:info@breakout.in">
          Book your adventure <Icon name="arrow" />
        </a>
      </section>

      <footer id="story">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">B</span>
              <span>
                BREAKOUT<sup>®</sup>
              </span>
            </a>
            <p>Set yourself free.</p>
          </div>
          <div>
            <h4>Escape rooms</h4>
            <a href="#locations">Koramangala</a>
            <a href="#locations">JP Nagar</a>
            <a href="#locations">Whitefield</a>
            <a href="#locations">Virtual Rooms</a>
          </div>
          <div>
            <h4>Experiences</h4>
            <a href="#experiences">Birthdays</a>
            <a href="#experiences">Farewells</a>
            <a href="#experiences">Corporate</a>
            <a href="#experiences">Bachelor(ette)</a>
          </div>
          <div>
            <h4>Find us</h4>
            <a href="mailto:info@breakout.in">info@breakout.in</a>
            <a href="tel:+919742386781">+91 97423 86781</a>
            <a href="#locations">Instagram</a>
            <a href="#locations">YouTube</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Breakout. All rights reserved.</span>
          <span>Privacy · Terms · Refunds</span>
        </div>
      </footer>
    </main>
  )
}

export default App
