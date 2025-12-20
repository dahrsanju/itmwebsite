import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupForm, setPopupForm] = useState({ name: '', phone: '' })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closePopup = () => {
    setShowPopup(false)
    // Set timer to show popup again after 1 minute
    setTimeout(() => {
      setShowPopup(true)
    }, 60000) // 1 minute = 60000 milliseconds
  }

  const handlePopupSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Popup form submitted:', popupForm)
    setPopupForm({ name: '', phone: '' })
    setShowPopup(false)
  }

  useEffect(() => {
    // Show popup immediately when website opens
    setShowPopup(true)
  }, [])

  return (
    <div className="App">
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="top-header-left">
            <div className="social-links">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            </div>
            <div className="contact-info">
              <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +91 9515173271</span>
              <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> contact@itechmanthra.com</span>
            </div>
          </div>
          <div className="top-header-right">
            <a href="#quote" className="request-quote-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <h2>ITECH MANTHRA</h2>
          </div>
          <div className="nav-right">
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li className="dropdown">
                  <a href="#services">Services</a>
                  <ul className="dropdown-menu">
                    <li><a href="#seo">SEO</a></li>
                    <li><a href="#ppc">PPC</a></li>
                    <li><a href="#social">Social Media</a></li>
                    <li><a href="#web-design">Web Designing</a></li>
                    <li><a href="#guest-posting">Guest Posting</a></li>
                  </ul>
                </li>
                <li><a href="#training">Training</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <div className="nav-actions">
              <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
        </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">Digital Marketing Agency</div>
            <h1 className="hero-title">
              Get Your Brand Heard with <span className="highlight">ITECH MANTHRA</span>
            </h1>
            <p className="hero-subtitle">
              Ranked #1 in Google Search<br />
              Hyderabad's Top Digital Marketing Agency
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary btn-large">CONTACT US</a>
              <a href="#about" className="btn-secondary-dark btn-large">Learn More</a>
            </div>
          </div>
          <div className="hero-right">
            <img src="/heroimg11.png" alt="Digital Marketing - AI Powered Innovation" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Company Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="popup-header">
              <h2>About ITech Manthra</h2>
              <p>Revolutionizing Brands with Creative Digital Marketing</p>
            </div>
            <div className="popup-body">
              <div className="company-info">
                <p>iTech Manthra is a Creative Digital Marketing Company. Every business needs a unique strategy to succeed in this digital world. We provide custom digital solutions for all our clients to achieve their business goals.</p>
              </div>
              <div className="popup-form">
                <h4>Get Started Today!</h4>
                <form onSubmit={handlePopupSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={popupForm.name}
                      onChange={(e) => setPopupForm({...popupForm, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      value={popupForm.phone}
                      onChange={(e) => setPopupForm({...popupForm, phone: e.target.value})}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn-primary btn-full">Get Free Consultation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Best Digital Marketing Agency in Hyderabad</h2>
          <p className="section-subtitle">The One-stop Solution for All Your Online Marketing Needs</p>
          
          <div className="services-layout">
            <div className="services-grid-2x2">
              <div className="service-card service-card-seo">
                <div className="service-card-content">
                  <h3>Search Engine Optimization (SEO)</h3>
                  <p>We're not just a SEO provider; we're a partner that you can rely on. We offer a comprehensive suite of SEO services, from keyword research to link building to content creation.</p>
                </div>
              </div>

              <div className="service-card service-card-ppc">
                <div className="service-card-content">
                  <h3>Google & Youtube Ads (PPC)</h3>
                  <p>We offer a comprehensive suite of services that helps businesses reach their marketing goals. Our team of experts are certified in both Google Ads and YouTube Ads.</p>
                </div>
              </div>

              <div className="service-card service-card-smm">
                <div className="service-card-content">
                  <h3>Social Media Marketing (SMM)</h3>
                  <p>We're here to help you grow your business and reach your goals. We offer a wide range of social media marketing services, from strategy and planning to content creation.</p>
                </div>
              </div>

              <div className="service-card service-card-webdesign">
                <div className="service-card-content">
                  <h3>Website Designing & Auditing</h3>
                  <p>Websites are a critical part of any business, and we understand that. We offer a wide range of services, including website design, auditing, and more.</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="contact-form-card">
                <h3>REQUEST CALLBACK</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Your Phone" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Select Service</option>
                      <option value="seo">SEO</option>
                      <option value="ppc">PPC</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="web-design">Web Designing</option>
                      <option value="guest-posting">Guest Posting</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn-primary btn-full">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="ai-background-elements">
          <div className="ai-brain"></div>
          <div className="ai-circuit"></div>
          <div className="ai-data-flow"></div>
          <div className="ai-robot"></div>
          <div className="ai-particles">
            <div className="ai-particle"></div>
            <div className="ai-particle"></div>
            <div className="ai-particle"></div>
            <div className="ai-particle"></div>
            <div className="ai-particle"></div>
            <div className="ai-particle"></div>
          </div>
        </div>
        <div className="container">
          <div className="why-choose-header">
            <div className="why-choose-subtitle">Why we differ</div>
            <h2>What Makes Us the Best Digital Marketing Company in Hyderabad</h2>
            <p>Why do shouters shout in a world where everyone is a writer? Because the message has to be heard. It has to be big enough to be read. It has to be loud enough to be read. Why ITech Manthra? We are louder.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon creative-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3>Innovative Strategies</h3>
              <p><strong>Our Unique Approach:</strong> Break barriers with our innovative marketing strategies that deliver amplified results for your business.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon team-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p><strong>Our Digital Wizards:</strong> Our expert team of marketers, designers, and SEO specialists work together to make your brand stand out.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon transparency-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3>Data-Driven Insights</h3>
              <p><strong>Numbers that Speak:</strong> We rely on data-driven insights to create impactful campaigns with measurable results.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon customer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Customer-Centric</h3>
              <p><strong>Your Success is Our Priority:</strong> We prioritize understanding your goals and target audience to craft customer-centric campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Digital Partner Section */}
      <section className="digital-partner">
        <div className="container">
          <div className="digital-partner-content">
            <div className="digital-partner-left">
              <div className="partner-image-card">
                <img src="/business.jpg" alt="Business Deals Partnership" className="partner-image" />
              </div>
            </div>
            <div className="digital-partner-right">
              <h3>Exceptional Digital Partner for Your Business Plan</h3>
              <p>The right proportion of ingredients only makes the best recipe, even in the digital dimension. Try us.</p>
              
              <div className="services-list">
                <div className="service-item">
                  <h5>Search Engine Optimization</h5>
                </div>
                <div className="service-item">
                  <h5>Social Media Marketing</h5>
                </div>
                <div className="service-item">
                  <h5>Website Designing</h5>
                </div>
                <div className="service-item">
                  <h5>Google Ads & PPC</h5>
                </div>
                <div className="service-item">
                  <h5>Influencer Marketing</h5>
                </div>
                <div className="service-item">
                  <h5>Creatives & Graphic Designs</h5>
                </div>
              </div>
              
              <a href="#contact" className="btn-primary btn-large">CONTACT US</a>
            </div>
          </div>
        </div>
      </section>

      {/* ITech Manthra Services Section */}
      <section className="itech-services">
        <div className="container">
          <div className="services-layout-with-sidebar">
            <div className="services-main">
              <div className="section-header">
                <h2>ITech Manthra Services</h2>
                <p>Comprehensive Digital Marketing Solutions for Your Business Growth</p>
              </div>
              
              <div className="itech-services-grid">
                <div className="itech-service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <h3>SEO Services</h3>
                  <p>Boost your website's visibility with our comprehensive SEO strategies including keyword research, on-page optimization, and technical SEO audits.</p>
                  <ul>
                    <li>Domain Rating & Authority</li>
                    <li>Link Building Strategy</li>
                    <li>Website Audit</li>
                    <li>SEO Article Writing</li>
                  </ul>
                </div>

                <div className="itech-service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <h3>Social Media Marketing</h3>
                  <p>Engage your audience across all social platforms with creative content strategies and data-driven campaigns that drive real results.</p>
                  <ul>
                    <li>Instagram Growth</li>
                    <li>Facebook Campaigns</li>
                    <li>Content Creation</li>
                    <li>Community Management</li>
                  </ul>
                </div>

                <div className="itech-service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h3>AI Digital Marketing</h3>
                  <p>Leverage cutting-edge AI technology to automate processes, analyze data, and create personalized marketing experiences for your customers.</p>
                  <ul>
                    <li>AI-Powered Analytics</li>
                    <li>Automated Campaigns</li>
                    <li>Predictive Marketing</li>
                    <li>Smart Content Generation</li>
                  </ul>
                </div>

                <div className="itech-service-card">
                  <div className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3>Creative Digital Solutions</h3>
                  <p>Transform your brand with innovative digital strategies and creative approaches that set you apart from the competition.</p>
                  <ul>
                    <li>Brand Strategy</li>
                    <li>Creative Campaigns</li>
                    <li>Digital Innovation</li>
                    <li>Custom Solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="trending-blogs-sidebar">
              <h3>Trending Blogs</h3>
              <div className="blog-posts">
                <div className="blog-post">
                  <div className="blog-meta">
                    <span className="blog-category">Digital Marketing</span>
                    <span className="blog-date">Sep 19, 2025</span>
                  </div>
                  <h4><a href="https://www.itechmanthra.com/blog/howtobuysinstagramfollowers/">How Can You Safely Buy Instagram Followers in 2025</a></h4>
                  <p>Real Followers, Smart Strategy - Complete guide to safely growing your Instagram presence...</p>
                </div>

                <div className="blog-post">
                  <div className="blog-meta">
                    <span className="blog-category">AI Digital Marketing</span>
                    <span className="blog-date">Sep 19, 2025</span>
                  </div>
                  <h4><a href="https://www.itechmanthra.com/blog/fmcg-field-reps-new-best-friend/">The FMCG Field Rep's New Best Friend</a></h4>
                  <p>AI-Driven Image Recognition transforming field sales operations and retail management...</p>
                </div>

                <div className="blog-post">
                  <div className="blog-meta">
                    <span className="blog-category">SEO News</span>
                    <span className="blog-date">Sep 18, 2025</span>
                  </div>
                  <h4><a href="https://www.itechmanthra.com/blog/latest-jobs-in-search-marketing/">The Latest Jobs in Search Marketing</a></h4>
                  <p>What's Hot in SEO, SEM & PPC - Career opportunities and industry trends...</p>
                </div>

                <div className="blog-post">
                  <div className="blog-meta">
                    <span className="blog-category">SEO</span>
                    <span className="blog-date">Sep 17, 2025</span>
                  </div>
                  <h4><a href="https://www.itechmanthra.com/blog/how-canonical-urls-work-and-why-they-matter-for-seo/">How Canonical URLs Work</a></h4>
                  <p>Why they're important for SEO and how to implement them correctly...</p>
                </div>
              </div>
              
              <div className="sidebar-cta">
                <h4>Stay Updated</h4>
                <p>Get the latest digital marketing insights delivered to your inbox.</p>
                <a href="#contact" className="btn-primary btn-small">Subscribe Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Clients Speak</h2>
          <p>Our client's opinions matter a lot to us.</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"If you ever want to make your mark on Instagram, Facebook, or any social channel, go with ITech Manthra. The creative team is innate in coming up with highly engaging posts."</p>
              </div>
              <div className="testimonial-author">
                <h4>MyFoodXpert Food Consultancy</h4>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"After thorough research of digital marketing agencies, we decided to give this company a shot considering their portfolio. They proposed for a few changes in the website mentioning that it would help us rank better which is actually happening."</p>
              </div>
              <div className="testimonial-author">
                <h4>EditPointIndia</h4>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"We could not be more impressed! ITech Manthra has assisted us right from SEO to PR with incredible results. The team is young who is aware of the current marketing trends."</p>
              </div>
              <div className="testimonial-author">
                <h4>Eden Infra Projects</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>ITech Manthra is the best digital marketing agency in India with a global presence. We specialize in SEO, SEM, Social Media, Content Marketing, Website Designing, Creatives and more.</p>
              <p>Hyderabad | Bangalore | Vishakhapatnam | Vijayawada</p>
            </div>
            
            <div className="footer-section">
              <h3>Featured Services</h3>
              <ul>
                <li><a href="#seo">Search Engine Optimization (SEO)</a></li>
                <li><a href="#social">Social Media Marketing</a></li>
                <li><a href="#ppc">Google Ads & PPC</a></li>
                <li><a href="#web-design">Website Designing</a></li>
                <li><a href="#guest-posting">Guest Posting</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Important Links</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#training">Training</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p><strong>Phone:</strong> +91 8919203640</p>
              <p><strong>Email:</strong> contact@itechmanthra.com</p>
              <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 ITECH MANTHRA. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
