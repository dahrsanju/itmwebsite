import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import { companyInfo } from '../data/siteData';
import contactBg from '../assets/images/contact-bg.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const onSubmit = (data) => {
    // Capture UTM params
    const urlParams = new URLSearchParams(window.location.search);
    const formData = {
      ...data,
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
    };
    console.log('Contact form:', formData);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact iTech Manthra',
    description: 'Get in touch with iTech Manthra for digital marketing services.',
    mainEntity: {
      '@type': 'Organization',
      name: companyInfo.name,
      telephone: companyInfo.phone,
      email: companyInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '503, Prasanth Ram Towers, Ameerpet',
        addressLocality: 'Hyderabad',
        postalCode: '500073',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Sa 10:00-19:00',
    },
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with iTech Manthra for digital marketing services. Call +91 7842816888 or email contact@itechmanthra.com. Office: 503, Prasanth Ram Towers, Ameerpet, Hyderabad."
        canonical="/contact"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4" data-aos="fade-down">Get In Touch</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4" data-aos="fade-up">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind? We'd love to hear from you. Reach out and let's start building something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <h2 className="section-title text-2xl">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the channels below. We're available Monday to Saturday, 10 AM to 7 PM.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  label="Visit Us"
                  value={companyInfo.address}
                />
                <ContactItem
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  label="Call Us"
                  value={companyInfo.phone}
                  href={`tel:${companyInfo.phone}`}
                  extra={companyInfo.phone2}
                  extraHref={`tel:${companyInfo.phone2}`}
                />
                <ContactItem
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  label="Email Us"
                  value={companyInfo.email}
                  href={`mailto:${companyInfo.email}`}
                />
                <ContactItem
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  label="Business Hours"
                  value={companyInfo.hours}
                />
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className="font-heading font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {Object.entries(companyInfo.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-bold uppercase">{platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-3">
                  <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      id="c-name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      id="c-phone"
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="c-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    id="c-email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="c-service" className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                  <select
                    id="c-service"
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Services</option>
                    <option value="ppc">PPC / Google Ads</option>
                    <option value="smm">Social Media Marketing</option>
                    <option value="web-design">Web Design</option>
                    <option value="guest-posting">Guest Posting</option>
                    <option value="link-building">Link Building</option>
                    <option value="domain-authority">Domain Authority</option>
                    <option value="training">Training & Placement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="c-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full justify-center !py-3.5">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
        <iframe
          title="iTech Manthra Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.4475!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE1LjAiTiA3OMKwMjYnNTEuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function ContactItem({ icon, label, value, href, extra, extraHref }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-dark font-medium hover:text-primary transition-colors">{value}</a>
        ) : (
          <p className="text-dark font-medium">{value}</p>
        )}
        {extra && (
          <a href={extraHref} className="text-gray-500 text-sm hover:text-primary transition-colors block mt-0.5">{extra}</a>
        )}
      </div>
    </div>
  );
}
