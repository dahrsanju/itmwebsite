import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import SectionHeader from '../components/ui/SectionHeader';
import CounterCard from '../components/ui/CounterCard';
import { companyInfo, team, stats } from '../data/siteData';
import aboutTeam from '../assets/images/about-team.jpg';
import aboutMission from '../assets/images/about-mission.jpg';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About iTech Manthra',
    description: 'Learn about iTech Manthra, a creative digital marketing agency with 10+ years of experience.',
    mainEntity: {
      '@type': 'Organization',
      name: companyInfo.name,
      foundingDate: '2014',
      numberOfEmployees: '50+',
    },
  };

  const timeline = [
    { year: '2014', title: 'Founded', desc: 'iTech Manthra was established with a vision to revolutionise digital marketing.' },
    { year: '2016', title: 'Global Expansion', desc: 'Expanded services to international clients across 10+ countries.' },
    { year: '2018', title: '100+ Clients', desc: 'Reached the milestone of serving over 100 satisfied clients worldwide.' },
    { year: '2020', title: 'Training Division', desc: 'Launched SEO training programs to empower the next generation of marketers.' },
    { year: '2022', title: 'AI Integration', desc: 'Integrated AI tools into our marketing strategies for enhanced results.' },
    { year: '2024', title: '500+ Projects', desc: 'Delivered over 500 successful digital marketing projects globally.' },
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="iTech Manthra is a creative digital marketing agency with 10+ years of experience. We provide custom digital solutions with a team of experts from all over the world."
        canonical="/about"
        jsonLd={jsonLd}
      />

      {/* Page Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -right-20" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4" data-aos="fade-down">About Us</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4" data-aos="fade-up">
            Revolutionising Brands With<br />
            <span className="gradient-text">A New Creative Approach</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            We are a team of creative digital marketing professionals dedicated to transforming businesses in the digital world.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img src={aboutTeam} alt="iTech Manthra Team" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Who We Are</span>
              <h2 className="section-title">A Team of Creative Professionals</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                iTM is a team of creative digital marketing professionals from all over the world. Each one is well recognized as an expert in their niche and has proven experience in helping multinational businesses for 10+ years.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To pace up with the emerging technology, there is a need for every individual business to conquer the digital space and mark their online visibility. We have customized our Digital Marketing Services to boost online presence through effective White Hat Link Building Techniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Proven Strategies', 'Success Stories', 'Money Back Guarantee', 'Industry Experts'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Mission</span>
              <h2 className="section-title">Let's Make It Possible</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To redefine the way in which brands connect with their ideal customers all around the world. With our creative approach we've transformed our entire client's business into credible brands in their niche and driven their business goals to the next level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SEO is not just about enhancing your website's rank in SERP; it's all about improving your site's visibility amid your competitors. Here at iTech Manthra, we keenly want our clients to conquer the online business world.
              </p>
            </div>
            <div data-aos="fade-left">
              <img src={aboutMission} alt="Our Mission" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            label="Our Journey"
            title="Growing Stronger Every Year"
            subtitle="A look at the key milestones in our journey of helping businesses grow digitally."
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="text-primary font-heading font-extrabold text-2xl">{item.year}</span>
                  <h3 className="font-heading font-bold text-lg text-dark mt-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10" />
                <div className="w-5/12" />
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

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            label="Our Team"
            title="Meet Our Experts"
            subtitle="Our talented team of professionals is dedicated to delivering exceptional results for every client."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-heading font-bold text-primary/30 group-hover:scale-110 transition-transform duration-500">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-2xl" />
                </div>
                <h3 className="font-heading font-bold text-dark">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's collaborate to take your business to the next level with our expert digital marketing services.
            </p>
            <Link to="/contact" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
