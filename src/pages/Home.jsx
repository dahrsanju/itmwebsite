import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import SectionHeader from '../components/ui/SectionHeader';
import CounterCard from '../components/ui/CounterCard';
import { services } from '../data/services';
import { companyInfo, testimonials, stats, portfolio } from '../data/siteData';
import heroBg from '../assets/images/hero-bg.jpg';
import aboutTeam from '../assets/images/about-team.jpg';
import trainingImg from '../assets/images/training.jpg';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });

    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 60, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-subtitle', { y: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-desc', { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
      gsap.from('.hero-buttons', { y: 30, opacity: 0, duration: 1, delay: 0.6, ease: 'power3.out' });
      gsap.from('.hero-image', { x: 60, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    url: companyInfo.domain,
    logo: `${companyInfo.domain}/logo-4.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'sales',
      areaServed: 'Worldwide',
    },
    sameAs: Object.values(companyInfo.social),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '503, Prasanth Ram Towers, Ameerpet',
      addressLocality: 'Hyderabad',
      postalCode: '500073',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <SEOHead
        title="Creative Digital Marketing Agency"
        description="iTech Manthra is a creative digital marketing company offering SEO, PPC, social media marketing, web design, and more. Boost your business online presence with our expert team."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
          <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="hero-subtitle inline-block px-4 py-1.5 bg-primary/20 text-accent text-sm font-semibold rounded-full mb-6 border border-primary/30">
                Expert & Skilled Digital Agency
              </span>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-[1.1]">
                A Place That Helps
                <span className="gradient-text block mt-2">Growth of Your Business</span>
              </h1>
              <p className="hero-desc text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                We provide custom digital solutions for all our clients to achieve their business goals with a team of experts from all over the world.
              </p>
              <div className="hero-buttons flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary text-base !py-3.5 !px-8">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/services" className="btn-secondary text-base !py-3.5 !px-8">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-image hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-3" />
                <img
                  src="/heroimg11.png"
                  alt="Digital Marketing Experts"
                  className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img src={aboutTeam} alt="iTech Manthra Team" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-3xl font-heading font-extrabold">10+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">About Us</span>
              <h2 className="section-title">Revolutionising Brands With a Creative Approach</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                iTech Manthra is a Creative Digital Marketing Company. Every business needs a unique strategy to succeed in this digital world. We provide custom digital solutions for all our clients to achieve their business goals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Right from start-ups and small companies to large businesses, we have customised our Digital Marketing Services to boost their online presence through effective White Hat Link Building Techniques.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Proven Strategies', 'Success Stories', 'Money Back Guarantee', 'Industry Experts'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Digital Marketing Services"
            subtitle="We provide world-class digital marketing services to help your business grow and succeed in the digital landscape."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="card group p-6"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-dark group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {service.summary}
                </p>
                <div className="mt-4 text-primary text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeader
            label="Why Choose Us"
            title="Your Trusted Digital Partner"
            subtitle="iTM is a team of creative digital marketing professionals from all over the world with proven experience helping multinational businesses."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Creative Approach', desc: 'Unique strategies tailored for each business to stand out in the competitive digital landscape.' },
              { icon: '👥', title: 'Expert Team', desc: 'Well-recognized experts in their niche with 10+ years proven experience across industries.' },
              { icon: '🔒', title: 'Transparency', desc: 'Complete transparency in our processes with regular reports and open communication.' },
              { icon: '🎯', title: 'Result Driven', desc: 'Focused on delivering measurable results that directly impact your business growth and ROI.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <CounterCard key={stat.label} number={stat.number} label={stat.label} light />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            subtitle="Take a look at some of our recent projects that have delivered exceptional results for our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.slice(0, 6).map((project, i) => (
              <div
                key={project.name}
                className="card group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-white font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-bold text-lg mt-1 text-dark">{project.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link to="/portfolio" className="btn-outline">
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Training & Placement</span>
              <h2 className="section-title">Best SEO Training Programs in Hyderabad</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Are you looking to learn SEO? Our training courses are specially designed for beginners, business owners, students, or anyone curious about enhancing their skills and business website online presence.
              </p>
              <ul className="space-y-3 mb-8">
                {['AI-Integrated SEO Training', 'Hands-on Live Projects', '9 Comprehensive Modules', 'Expert Faculty with 10+ Years Experience', 'Placement Assistance'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/training" className="btn-primary">
                Explore Training Programs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div data-aos="fade-left">
              <img src={trainingImg} alt="SEO Training in Hyderabad" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl top-0 right-0" />
          <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl bottom-0 left-0" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeader
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="Hear from our satisfied clients about their experience working with iTech Manthra."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's make it possible! Contact us today and let our experts craft a digital strategy that drives real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Get A Free Quote
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary !border-white/30">
                Call Us Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
