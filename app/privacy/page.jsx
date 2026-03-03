import Link from 'next/link';
import { companyInfo } from '@/data/siteData';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for iTech Manthra - how we collect, use, and protect your personal information.',
};

export default function Privacy() {
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
            Privacy <span className="gradient-text">Policy</span>
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
            At iTech Manthra (accessible from https://www.itechmanthra.com), the privacy of our visitors and clients is one of our main priorities. This Privacy Policy document contains types of information that is collected and recorded by iTech Manthra and how we use it.
          </p>

          <div className="space-y-10">
            <PolicySection number="1" title="Information We Collect">
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information to provide better services to all our users. The types of personal information we may collect include:
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Contact Data', desc: 'Name, email address, phone number, and company name.' },
                  { label: 'Project Data', desc: 'Website URLs, brand assets, and marketing objectives required for our Digital PR and Outreach services.' },
                  { label: 'Payment Data', desc: 'Transaction details required for processing service fees (we do not store full credit card details on our servers; these are handled by secure, third-party processors).' },
                  { label: 'Technical Data', desc: 'IP address, browser type, and usage patterns collected through cookies to improve website performance.' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-heading font-bold text-dark text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection number="2" title="How We Use Your Information">
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-2">
                {[
                  'To provide, operate, and maintain our Authority Optimization and Editorial Outreach services.',
                  'To communicate with you regarding project milestones and campaign updates.',
                  'To process enrollments for our Digital Marketing Training programs.',
                  'To send periodic emails regarding industry insights and service enhancements (you may opt-out at any time).',
                  'To find and prevent fraudulent activity.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="3" title="Data Security & Authority Profile Safety">
              <p className="text-gray-600 leading-relaxed mb-4">
                We take the security of your digital assets seriously.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Confidentiality</h4>
                  <p className="text-gray-500 text-sm">Any website data or strategic information shared with us for the purpose of Brand Citation or SEO Consulting is kept strictly confidential.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-heading font-bold text-dark text-sm mb-1">Non-Disclosure</h4>
                  <p className="text-gray-500 text-sm">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except for the purpose of securing editorial placements as part of your agreed-upon service.</p>
                </div>
              </div>
            </PolicySection>

            <PolicySection number="4" title="Cookies and Web Beacons">
              <p className="text-gray-600 leading-relaxed">
                Like any other website, iTech Manthra uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>
            </PolicySection>

            <PolicySection number="5" title="Third-Party Privacy Policies">
              <p className="text-gray-600 leading-relaxed">
                iTech Manthra&apos;s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party servers (such as Google Analytics or payment gateways) for more detailed information.
              </p>
            </PolicySection>

            <PolicySection number="6" title="GDPR & Data Protection Rights">
              <p className="text-gray-600 leading-relaxed mb-4">
                We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <ul className="space-y-2">
                {[
                  'The right to access: You have the right to request copies of your personal data.',
                  'The right to rectification: You have the right to request that we correct any information you believe is inaccurate.',
                  'The right to erasure: You have the right to request that we erase your personal data, under certain conditions.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="7" title="Children's Information">
              <p className="text-gray-600 leading-relaxed">
                Another part of our priority is adding protection for children while using the internet. iTech Manthra does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Consent">
              <p className="text-gray-600 leading-relaxed">
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Contact Us">
              <p className="text-gray-600 leading-relaxed">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold text-dark">Email:</span>{' '}
                  <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">{companyInfo.email}</a>
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-dark">Website:</span>{' '}
                  <Link href="/contact" className="text-primary hover:underline">https://www.itechmanthra.com/contact</Link>
                </p>
              </div>
            </PolicySection>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <p className="text-gray-600 mb-4">Have questions about our privacy practices? Get in touch with us.</p>
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
