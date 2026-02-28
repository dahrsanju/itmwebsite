import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHead from '../components/ui/SEOHead';
import SectionHeader from '../components/ui/SectionHeader';
import { seoCourse, companyInfo } from '../data/siteData';
import trainingImg from '../assets/images/training.jpg';
import trainingClassroom from '../assets/images/training-classroom.jpg';
import trainingStudents from '../assets/images/training-students.jpg';
import trainingWorkshop from '../assets/images/training-workshop.jpg';
import trainingCertificate from '../assets/images/training-certificate.jpg';

export default function Training() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const onSubmit = (data) => {
    console.log('Enrollment form:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'SEO Training Program',
    description: seoCourse.intro,
    provider: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.domain,
    },
    educationalLevel: 'Beginner to Advanced',
    courseMode: 'Blended',
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <SEOHead
        title="SEO Training & Placement Programs"
        description="Best SEO training programs in Hyderabad. AI-integrated SEO training with live projects, 9 comprehensive modules, expert faculty, and placement assistance."
        canonical="/training"
        jsonLd={jsonLd}
      />

      {/* Hero - Full width image */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingImg} alt="SEO Training in Hyderabad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
        </div>
        <div className="container-custom relative z-10 pb-14 pt-32 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4" data-aos="fade-down">Training & Placement</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-5" data-aos="fade-up">
            Best SEO Training Programs<br />
            <span className="gradient-text">in Hyderabad</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            {seoCourse.intro}
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <a href="#enroll" className="btn-primary !py-3.5 !px-8 text-base">
              Enroll Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* What is SEO - Image + Text */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img
                  src={trainingClassroom}
                  alt="SEO Training Classroom"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white p-5 rounded-xl shadow-xl hidden md:block">
                  <div className="text-2xl font-heading font-extrabold">9</div>
                  <div className="text-xs opacity-90">Modules</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Understanding SEO</span>
              <h2 className="section-title">What is Search Engine Optimization?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {seoCourse.whatIsSeo}
              </p>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
                <p className="text-primary font-semibold">{seoCourse.features}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules - With image banner */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            label="Curriculum"
            title="Course Syllabus"
            subtitle="9 comprehensive modules covering everything from SEO basics to advanced live projects."
          />

          {/* Image banner above modules */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up">
            <div className="grid grid-cols-3 h-56">
              <img src={trainingClassroom} alt="Training classroom" className="w-full h-full object-cover" loading="lazy" />
              <img src={trainingStudents} alt="Students learning SEO" className="w-full h-full object-cover" loading="lazy" />
              <img src={trainingWorkshop} alt="Hands-on workshop" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {seoCourse.modules.map((mod, i) => (
              <div
                key={mod.num}
                className="card p-6 hover:border-primary/20"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                    {String(mod.num).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading font-bold text-dark">{mod.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{mod.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - With side image */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingWorkshop} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-40 -right-40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">Why Join</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
                Benefits of Our Training
              </h2>
              <p className="text-gray-300 mb-8">What makes our SEO training program the best choice for your career growth.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {seoCourse.benefits.map((benefit, i) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                  >
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="text-gray-200 text-sm font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="hidden lg:block">
              <img
                src={trainingCertificate}
                alt="SEO Training Certificate and Placement"
                className="rounded-2xl shadow-2xl w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right" className="order-2 lg:order-1">
              <img
                src={trainingStudents}
                alt="Students placed in top companies"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left" className="order-1 lg:order-2">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">Career Growth</span>
              <h2 className="section-title">Placement Highlights</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our training programs don't just teach you SEO — they prepare you for a thriving career in digital marketing with real-world project experience and placement support.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { num: '95%', label: 'Placement Rate' },
                  { num: '200+', label: 'Students Placed' },
                  { num: '50+', label: 'Hiring Partners' },
                  { num: '4.8/5', label: 'Student Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-heading font-extrabold gradient-text">{stat.num}</div>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {['Resume building & interview preparation', 'Direct referrals to hiring companies', 'Internship opportunities with live clients', 'Lifetime access to course materials'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <SectionHeader
                label="Enroll Now"
                title="Start Your SEO Journey"
                subtitle="Fill out the form below and our team will get back to you with program details and next steps."
                align="left"
              />

              {/* Image next to form info */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={trainingClassroom}
                  alt="Join our SEO training program"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📚', text: 'Comprehensive 9-module curriculum' },
                  { icon: '🤖', text: 'AI-integrated training methodology' },
                  { icon: '💼', text: 'Live project experience' },
                  { icon: '🎓', text: 'Certificate upon completion' },
                  { icon: '🏢', text: 'Placement assistance' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-3">
                  <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Thank you for your interest! Our team will contact you shortly with program details.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Enrollment Form</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1.5">Course Selection *</label>
                    <select
                      id="course"
                      {...register('course', { required: 'Please select a course' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select a course</option>
                      <option value="seo">SEO Training</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="both">Both Programs</option>
                    </select>
                    {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Any questions or comments?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center !py-3.5">
                    Submit Enrollment
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Launch Your Digital Marketing Career
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join hundreds of successful graduates who have transformed their careers with our industry-leading SEO training program.
            </p>
            <a href={`tel:${companyInfo.phone}`} className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Us: {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
