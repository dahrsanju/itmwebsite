import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import SectionHeader from '../components/ui/SectionHeader';
import { portfolio, companyInfo } from '../data/siteData';
import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio-4.jpg';
import portfolio5 from '../assets/images/portfolio-5.jpg';
import portfolio6 from '../assets/images/portfolio-6.jpg';

const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio1, portfolio2];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const categories = ['All', ...new Set(portfolio.map(p => p.category))];
  const filtered = activeFilter === 'All' ? portfolio : portfolio.filter(p => p.category === activeFilter);

  return (
    <>
      <SEOHead
        title="Our Portfolio"
        description="Explore our portfolio of successful digital marketing projects. See how we've helped businesses grow their online presence with SEO, web design, and content marketing."
        canonical="/portfolio"
      />

      {/* Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -left-20" />
          <div className="absolute w-72 h-72 bg-accent/10 rounded-full blur-3xl bottom-0 right-0" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4" data-aos="fade-down">Our Work</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4" data-aos="fade-up">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            Take a look at some of our recent projects that have delivered exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-0 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.name}
                className="card group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={portfolioImages[i % portfolioImages.length]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                    <div className="p-5">
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-semibold flex items-center gap-1 hover:text-accent transition-colors"
                      >
                        Visit Site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
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
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <SectionHeader
              label="Results That Speak"
              title="Every Project Tells a Story"
              subtitle="Each project we undertake is backed by a strategic approach. From problem identification to solution delivery, we ensure measurable results."
            />
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              {[
                { num: '300%', label: 'Average Traffic Increase' },
                { num: '250%', label: 'Lead Generation Growth' },
                { num: '95%', label: 'Client Satisfaction Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-heading font-extrabold gradient-text mb-1">{stat.num}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's discuss your project and create a customized strategy that delivers real, measurable results.
            </p>
            <Link to="/contact" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
