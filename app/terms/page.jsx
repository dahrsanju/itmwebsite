import Link from 'next/link';
import { companyInfo } from '@/data/siteData';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for iTech Manthra digital marketing services, editorial outreach, and training programs.',
};

export default function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -right-20" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">Legal</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to iTech Manthra. These Terms and Conditions govern your access to our website and the engagement of our professional growth services. By using our platform, you agree to the following standards of service.
          </p>

          <div className="space-y-10">
            <PolicySection number="1" title="Scope of Services">
              <p className="text-gray-600 leading-relaxed mb-4">
                iTech Manthra is a high-performance digital agency providing:
              </p>
              <ul className="space-y-2">
                {[
                  'Authority Profile Optimization (Strategic Brand Trust Building)',
                  'Editorial Outreach & Content Distribution',
                  'Search Ecosystem Consulting (SEO Strategy)',
                  'Digital Skills Training & Professional Placement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="2" title="Client Partnership & Obligations">
              <p className="text-gray-600 leading-relaxed">
                For the successful execution of any campaign, the client agrees to provide all necessary brand assets and access in a timely manner. Project timelines (Campaign Days) commence only after the &quot;Discovery Phase&quot; is complete and all requested materials are received.
              </p>
            </PolicySection>

            <PolicySection number="3" title="Editorial Integrity & Placement">
              <p className="text-gray-600 leading-relaxed mb-4">
                We facilitate Earned Media. Our process involves pitching high-quality, original content to third-party publishers.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Editorial Control', desc: 'Final publication is at the discretion of the host site\'s editorial board.' },
                  { label: 'Content Quality', desc: 'We ensure all distributed content meets professional journalistic standards to provide value to the end-reader.' },
                  { label: 'Longevity', desc: 'While we strive for long-term brand mentions, we are not responsible for the independent operational decisions of third-party media outlets.' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-heading font-bold text-dark text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection number="4" title="Performance Metrics Disclaimer">
              <p className="text-gray-600 leading-relaxed mb-4">
                iTech Manthra utilizes industry-standard third-party analytics (such as Moz or Ahrefs) to monitor progress.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Third-Party Metrics</h4>
                  <p className="text-gray-500 text-sm">We do not have direct control over the proprietary algorithms of these software providers.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Search Engine Volatility</h4>
                  <p className="text-gray-500 text-sm">Search environments are subject to frequent core updates. iTech Manthra provides strategic recommendations based on current best practices but does not claim to control search engine ranking outcomes.</p>
                </div>
              </div>
            </PolicySection>

            <PolicySection number="5" title="Satisfaction & Refund Policy">
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to delivering the specific milestones outlined in your service agreement.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Milestone Guarantee</h4>
                  <p className="text-gray-500 text-sm">If the agreed-upon volume of editorial placements or brand mentions is not achieved within the specified campaign window, a pro-rata refund may be requested for the unfulfilled portion.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Prerequisites</h4>
                  <p className="text-gray-500 text-sm">Refunds are not applicable if the client fails to provide necessary approvals or if the client&apos;s web property has a pre-existing history of non-compliance with webmaster guidelines.</p>
                </div>
              </div>
            </PolicySection>

            <PolicySection number="6" title="Professional Training & Career Services">
              <p className="text-gray-600 leading-relaxed">
                Our master-level training programs are designed to equip students with technical proficiency in modern marketing tools. While we provide robust career support and interview preparation, final employment is determined by the hiring organization&apos;s requirements and the candidate&apos;s performance.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Limitation of Liability">
              <p className="text-gray-600 leading-relaxed">
                iTech Manthra shall not be held liable for indirect, incidental, or consequential damages resulting from fluctuations in digital traffic or third-party platform policies. Our total liability is limited to the fees paid for the specific service campaign.
              </p>
            </PolicySection>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <p className="text-gray-600 mb-4">Have questions about our terms? Get in touch with us.</p>
            <Link href="/contact" className="btn-primary inline-flex">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({ number, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="font-heading font-bold text-primary text-sm">{number}</span>
        </div>
        <h2 className="font-heading font-bold text-xl text-dark">{title}</h2>
      </div>
      {children}
    </div>
  );
}
