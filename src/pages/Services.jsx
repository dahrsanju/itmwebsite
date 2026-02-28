import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import SectionHeader from '../components/ui/SectionHeader';
import { services } from '../data/services';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digital Marketing Services',
    description: 'Complete digital marketing services offered by iTech Manthra.',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `https://www.itechmanthra.com/services/${s.slug}`,
    })),
  };

  return (
    <>
      <SEOHead
        title="Digital Marketing Services"
        description="Explore our comprehensive digital marketing services including SEO, PPC, social media marketing, web design, guest posting, link building, and more."
        canonical="/services"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -left-20" />
          <div className="absolute w-72 h-72 bg-accent/10 rounded-full blur-3xl bottom-0 right-0" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4" data-aos="fade-down">Our Services</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4" data-aos="fade-up">
            World-Class <span className="gradient-text">Digital Marketing</span> Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            We provide comprehensive digital marketing solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="card group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.summary}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us for a free consultation. We'll analyze your business and recommend the best digital marketing strategy.
            </p>
            <Link to="/contact" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
