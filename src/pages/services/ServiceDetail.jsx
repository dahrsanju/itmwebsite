import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../../components/ui/SEOHead';
import SectionHeader from '../../components/ui/SectionHeader';
import { getServiceBySlug, services } from '../../data/services';
import { companyInfo } from '../../data/siteData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  if (!service) return <Navigate to="/services" replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.intro,
    provider: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.domain,
    },
    areaServed: 'Worldwide',
    serviceType: service.title,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: companyInfo.domain },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${companyInfo.domain}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${companyInfo.domain}/services/${service.slug}` },
    ],
  };

  const otherServices = services.filter(s => s.id !== service.id).slice(0, 4);

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.intro.slice(0, 160)}
        canonical={`/services/${service.slug}`}
        jsonLd={[jsonLd, breadcrumbLd]}
      />

      {/* ============================================ */}
      {/* HERO - Full width image background */}
      {/* ============================================ */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
        </div>
        <div className="container-custom relative z-10 pb-14 pt-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-5" data-aos="fade-down">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-accent font-medium">{service.shortTitle}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-5xl mb-4 block" data-aos="fade-right">{service.icon}</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.1]" data-aos="fade-up">
              {service.title}
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="100">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact" className="btn-primary !py-3.5 !px-8">
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary !py-3.5 !px-8">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTRODUCTION - Image + Text side by side */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img
                  src={service.gallery?.intro || service.image}
                  alt={`${service.title} - Our Team`}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white p-5 rounded-xl shadow-xl hidden md:block">
                  <div className="text-2xl font-heading font-extrabold">10+</div>
                  <div className="text-xs opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">About This Service</span>
              <h2 className="section-title">{service.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              {service.needFor && (
                <ul className="space-y-3">
                  {service.needFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.subServices && (
                <div className="mt-6 space-y-3">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="font-heading font-bold text-dark text-sm">{sub.name}</h4>
                      <p className="text-gray-500 text-sm mt-1">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROBLEMS WE SOLVE - With background image */}
      {/* ============================================ */}
      {service.problems && (
        <section className="section-padding bg-gray-50 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div data-aos="fade-right">
                <SectionHeader
                  label="Challenges"
                  title="Problems We Solve"
                  subtitle="Common challenges businesses face that our service addresses effectively."
                  align="left"
                />
                <div className="space-y-4">
                  {service.problems.map((problem, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/10 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={i * 80}
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">{problem}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-aos="fade-left" className="hidden lg:block">
                <img
                  src={service.gallery?.process || service.image}
                  alt={`${service.title} - Strategy`}
                  className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* OUR PROCESS - Image gallery + steps */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            label="How We Work"
            title="Our Proven Process"
            subtitle="A systematic approach to delivering exceptional results for your business."
          />

          {/* Process image banner */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up">
            <div className="grid grid-cols-3 h-64">
              <img
                src={service.gallery?.intro || service.image}
                alt={`${service.title} process step 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <img
                src={service.gallery?.process || service.image}
                alt={`${service.title} process step 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <img
                src={service.gallery?.benefits || service.image}
                alt={`${service.title} process step 3`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="font-heading font-bold text-primary group-hover:text-white text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">{step.step}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS - Image + list side by side */}
      {/* ============================================ */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.gallery?.benefits || service.image}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-40 -right-40" />
          <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl bottom-0 -left-40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">Benefits</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
                Why Choose Our {service.shortTitle}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The advantages of working with iTech Manthra for your {service.shortTitle.toLowerCase()} needs.
              </p>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                  >
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="hidden lg:block">
              <div className="relative">
                <img
                  src={service.gallery?.benefits || service.image}
                  alt={`${service.title} - Results`}
                  className="rounded-2xl shadow-2xl w-full h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TECHNOLOGIES - With decorative images */}
      {/* ============================================ */}
      {service.technologies && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div data-aos="fade-right">
                <img
                  src={service.gallery?.process || service.image}
                  alt={`${service.title} - Technologies`}
                  className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Tech Stack</span>
                <h2 className="section-title">Technologies We Use</h2>
                <p className="text-gray-600 mb-6">Industry-leading tools and platforms we leverage for maximum results.</p>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 font-medium text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                      data-aos="zoom-in"
                      data-aos-delay={i * 60}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* PRICING (if available) */}
      {/* ============================================ */}
      {service.pricing && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              label="Pricing"
              title="Our Packages"
              subtitle="Transparent pricing with guaranteed results and dedicated support."
            />
            <div className={`grid gap-6 max-w-5xl mx-auto ${service.pricing.length <= 2 ? 'sm:grid-cols-2 max-w-2xl' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {service.pricing.map((pkg, i) => (
                <div
                  key={i}
                  className="card p-6 text-center hover:border-primary relative overflow-hidden group"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <h3 className="font-heading font-bold text-lg text-dark mb-2">{pkg.plan}</h3>
                  {pkg.target && <p className="text-primary font-semibold text-sm mb-3">{pkg.target}</p>}
                  <div className="text-3xl font-heading font-extrabold text-dark mb-1">{pkg.price}</div>
                  {pkg.timeline && <p className="text-gray-500 text-sm mb-4">{pkg.timeline}</p>}
                  {pkg.details && <p className="text-gray-500 text-sm mb-4">{pkg.details}</p>}
                  {pkg.features && (
                    <ul className="space-y-2 text-left mb-6">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* IMAGE GALLERY STRIP - All 4 unique images */}
      {/* ============================================ */}
      <section className="py-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay="0">
            <img src={service.gallery?.intro} alt={`${service.title} - our experts`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay="80">
            <img src={service.gallery?.process} alt={`${service.title} - strategy`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay="160">
            <img src={service.gallery?.benefits} alt={`${service.title} - results`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay="240">
            <img src={service.gallery?.strip} alt={`${service.title} - in action`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OTHER SERVICES - Cards with images */}
      {/* ============================================ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            label="More Services"
            title="Explore Other Services"
            subtitle="Discover our full range of digital marketing solutions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {otherServices.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="card group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-2xl">{s.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm text-dark group-hover:text-primary transition-colors">{s.shortTitle}</h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -top-40 -left-40" />
          <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl -bottom-20 -right-20" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Ready to Boost Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us today for a free consultation and discover how our {service.shortTitle.toLowerCase()} can transform your business.
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
