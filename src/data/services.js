import seoImg from '../assets/images/seo-service.jpg';
import ppcImg from '../assets/images/ppc-service.jpg';
import smmImg from '../assets/images/smm-service.jpg';
import webDesignImg from '../assets/images/web-design-service.jpg';
import guestPostingImg from '../assets/images/guest-posting.jpg';
import linkBuildingImg from '../assets/images/link-building.jpg';
import keywordImg from '../assets/images/keyword-ranking.jpg';
import domainImg from '../assets/images/domain-authority.jpg';

// Extra images per service
import seoTeam from '../assets/images/seo-team.jpg';
import seoStrategy from '../assets/images/seo-strategy.jpg';
import seoResults from '../assets/images/seo-results.jpg';

import ppcStrategy from '../assets/images/ppc-strategy.jpg';
import ppcDashboard from '../assets/images/ppc-dashboard.jpg';
import ppcResults from '../assets/images/ppc-results.jpg';

import smmStrategy from '../assets/images/smm-strategy.jpg';
import smmContent from '../assets/images/smm-content.jpg';
import smmTeam from '../assets/images/smm-team.jpg';

import webdesignProcess from '../assets/images/webdesign-process.jpg';
import webdesignMockup from '../assets/images/webdesign-mockup.jpg';
import webdesignTeam from '../assets/images/webdesign-team.jpg';

import guestpostWriting from '../assets/images/guestpost-writing.jpg';
import guestpostOutreach from '../assets/images/guestpost-outreach.jpg';
import guestpostResults from '../assets/images/guestpost-results.jpg';

import linkbuildTeam from '../assets/images/linkbuild-team.jpg';
import linkbuildNetwork from '../assets/images/linkbuild-network.jpg';
import linkbuildTech from '../assets/images/linkbuild-tech.jpg';

import keywordAnalysis from '../assets/images/keyword-analysis.jpg';
import keywordStrategy from '../assets/images/keyword-strategy.jpg';
import keywordTeam from '../assets/images/keyword-team.jpg';

import domainGrowth from '../assets/images/domain-growth.jpg';
import domainAnalytics from '../assets/images/domain-analytics.jpg';

// Gallery strip images (unique per service, never repeated)
import gallerySeo from '../assets/images/gallery-seo.jpg';
import galleryPpc from '../assets/images/gallery-ppc.jpg';
import gallerySmm from '../assets/images/gallery-smm.jpg';
import galleryWebdesign from '../assets/images/gallery-webdesign.jpg';
import galleryGuestpost from '../assets/images/gallery-guestpost.jpg';
import galleryLinkbuild from '../assets/images/gallery-linkbuild.jpg';
import galleryKeyword from '../assets/images/gallery-keyword.jpg';
import galleryDomain from '../assets/images/gallery-domain.jpg';
import domainTeam from '../assets/images/domain-team.jpg';

export const services = [
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO Services',
    icon: '🔍',
    image: seoImg,
    gallery: {
      intro: seoTeam,
      process: seoStrategy,
      benefits: seoResults,
      strip: gallerySeo,
    },
    summary: 'Boost your website ranking with our proven SEO strategies. We deliver organic traffic growth through white-hat techniques and data-driven optimization.',
    intro: 'Search engine optimization is an essential strategy to improve a website\'s ranking. A well-optimized site gets more attention from search engines as well as visitors. SEO is a slow process but the outcome is very fruitful. You need to work on SEO constantly for getting long-term success.',
    description: 'There are three types of SEO: on-page, off-page, and technical SEO. Most people work on on-page SEO by themselves. However, when it comes to off-page and technical optimization, it\'s better to get professional help from iTech Manthra. Especially, technical SEO is complex and your site\'s success depends on it a lot.',
    problems: [
      'Low search engine rankings despite having great content',
      'Competitors outranking you for target keywords',
      'Poor organic traffic and visibility',
      'Google algorithm penalties affecting your site',
    ],
    process: [
      { step: 'Audit', desc: 'Comprehensive website SEO audit to identify issues' },
      { step: 'Research', desc: 'Keyword research and competitor analysis' },
      { step: 'On-Page', desc: 'Title tags, meta descriptions, content optimization' },
      { step: 'Off-Page', desc: 'Quality link building and authority development' },
      { step: 'Technical', desc: 'Site speed, mobile optimization, structured data' },
      { step: 'Monitor', desc: 'Continuous tracking and strategy refinement' },
    ],
    benefits: [
      'Certified and well-dedicated SEO experts',
      'Keyword Research and Keyword Optimization',
      'On-page and Off-page SEO',
      'User-friendly approaches',
      'Boosts Credibility and Authority',
      'Improves Sales and Conversions',
    ],
    technologies: ['Google Analytics', 'Google Search Console', 'Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog'],
    needFor: [
      'Essential for boosting your SERP rankings and site visibility',
      'Keeps you adhered to Google Penguin Updates',
      'To stay ahead of your competitors',
      'Significantly enhance your customer base',
    ],
  },
  {
    id: 'ppc-services',
    slug: 'ppc-services',
    title: 'Google & YouTube Ads (PPC)',
    shortTitle: 'PPC Services',
    icon: '📢',
    image: ppcImg,
    gallery: {
      intro: ppcStrategy,
      process: ppcDashboard,
      benefits: ppcResults,
      strip: galleryPpc,
    },
    summary: 'Expand your business with high-performance Google Ads campaigns. Pay only for results — clicks, calls, and conversions that matter.',
    intro: 'When people search for your product or service, you will be visible. Pay only for the results you get, such as clicks to your site or calls to your company.',
    description: 'Our team is skilled in creating high-performance ads, hyper-targeted campaigns and high-performance ads. We also use all the digital media tools to optimize your marketing budget. Our Google-certified team of specialists works together to connect with you and your audience, generating sales leads, revenue, and other benefits.',
    problems: [
      'Wasting ad budget on irrelevant clicks',
      'Low conversion rates from paid campaigns',
      'Difficulty reaching the right target audience',
      'Poor ROI on advertising spend',
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your business goals and target audience' },
      { step: 'Research', desc: 'Thorough keyword research and competitor analysis' },
      { step: 'Campaign Setup', desc: 'Strategic campaign structure and ad creation' },
      { step: 'Landing Pages', desc: 'Optimized landing pages that convert 20-30% better' },
      { step: 'Optimization', desc: 'Continuous bid management and ad copy refinement' },
      { step: 'Reporting', desc: 'Transparent performance reports and insights' },
    ],
    benefits: [
      'Google-certified advertising specialists',
      'Search Network Ads for capturing user intent',
      'Responsive Display Ads for brand awareness',
      'E-commerce & Shopping Ads for increased sales',
      'Landing page optimization for better conversions',
      'Transparent reporting and ROI tracking',
    ],
    technologies: ['Google Ads', 'YouTube Ads', 'Google Tag Manager', 'Google Analytics', 'Data Studio', 'Hotjar'],
    subServices: [
      { name: 'Search Network Ads', desc: 'Create compelling search ads that capture user intent and drive sales.' },
      { name: 'Responsive Display Ads', desc: 'Increase brand awareness and optimize for maximum ad performance.' },
      { name: 'E-commerce & Shopping Ads', desc: 'Help you increase your customer base and sales through product listings.' },
    ],
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    icon: '📱',
    image: smmImg,
    gallery: {
      intro: smmTeam,
      process: smmStrategy,
      benefits: smmContent,
      strip: gallerySmm,
    },
    summary: 'Strategic social media management across all platforms. Build brand recognition, engage your audience, and drive conversions.',
    intro: 'Social media management is a service that helps businesses and individuals by managing their social networking platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube.',
    description: 'Social media plays a crucial role in our life. As the use of social media platforms is increasing every year, many businesses are getting benefits. Managing multiple accounts independently is difficult — our dedicated digital marketing team provides strategic promotion and advertising campaigns.',
    problems: [
      'Inconsistent social media presence and engagement',
      'Difficulty managing multiple platforms effectively',
      'Low follower growth and brand awareness',
      'No strategy for social media advertising',
    ],
    process: [
      { step: 'Strategy', desc: 'Develop a comprehensive social media strategy' },
      { step: 'Schedule', desc: 'Create and maintain a consistent posting schedule' },
      { step: 'Content', desc: 'Produce high-quality photos, infographics, and videos' },
      { step: 'Engage', desc: 'Active community management and customer responses' },
      { step: 'Advertise', desc: 'Targeted social media ad campaigns' },
      { step: 'Analyze', desc: 'Performance tracking and data-driven optimization' },
    ],
    benefits: [
      'Build brand recognition and present your brand story',
      'Gather audience data to improve your services',
      'Generate targeted referral traffic and link building',
      'Build customer loyalty through active engagement',
      'Enable easy audience response and interaction',
      'Generate conversions and increase online visibility',
    ],
    technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter/X', 'Pinterest', 'YouTube'],
  },
  {
    id: 'web-designing',
    slug: 'web-designing',
    title: 'Website Designing & Development',
    shortTitle: 'Web Design',
    icon: '🎨',
    image: webDesignImg,
    gallery: {
      intro: webdesignTeam,
      process: webdesignProcess,
      benefits: webdesignMockup,
      strip: galleryWebdesign,
    },
    summary: 'Professional web design that makes a powerful first impression. Custom, responsive websites that convert visitors into customers.',
    intro: 'iTech Manthra adds a new dimension to web designing. We are a professionally managed company having expert web designers and internet experts that make websites more meaningful, customer-friendly and attractive.',
    description: 'We know the first impression is the last impression as far as businesses of all kinds are concerned. Websites must be professionally built conveying the exact business values of the company to impress target audiences. iTech Manthra redefines the business with its value-added websites.',
    problems: [
      'Outdated website design that doesn\'t represent your brand',
      'Poor mobile responsiveness losing potential customers',
      'Slow loading speeds affecting user experience',
      'Low conversion rates from website visitors',
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your business, goals, and target audience' },
      { step: 'Wireframe', desc: 'Creating the blueprint and user flow architecture' },
      { step: 'Design', desc: 'Crafting beautiful, brand-aligned visual designs' },
      { step: 'Develop', desc: 'Building responsive, fast, and SEO-friendly websites' },
      { step: 'Test', desc: 'Thorough testing across devices and browsers' },
      { step: 'Launch', desc: 'Deployment, optimization, and ongoing support' },
    ],
    benefits: [
      'Custom, responsive design for all devices',
      'SEO-optimized website architecture',
      'Fast loading speeds and performance',
      'User-friendly navigation and experience',
      'Brand-aligned visual identity',
      'Ongoing maintenance and support',
    ],
    technologies: ['React', 'Next.js', 'WordPress', 'Tailwind CSS', 'Figma', 'Adobe XD'],
  },
  {
    id: 'guest-posting',
    slug: 'guest-posting',
    title: 'Guest Posting Services',
    shortTitle: 'Guest Posting',
    icon: '✍️',
    image: guestPostingImg,
    gallery: {
      intro: guestpostWriting,
      process: guestpostOutreach,
      benefits: guestpostResults,
      strip: galleryGuestpost,
    },
    summary: 'Premium guest posting that boosts your domain authority and drives organic growth through high-quality backlinks.',
    intro: 'iTech Manthra helps entrepreneurs grow their sales through digital marketing innovation. Our premium guest posting plans have emerged as a major marketing tool for companies seeking organic growth quickly.',
    description: 'Our guest posting service assists SMEs and online outlets to expand through guest posts. These enable conversion of trade inquiries into actual business and provide organic outreach growth through 100% manual outreach on high-authority websites.',
    problems: [
      'Low domain authority affecting search rankings',
      'Difficulty getting quality backlinks naturally',
      'Limited brand exposure in your niche',
      'Poor referral traffic from external sources',
    ],
    process: [
      { step: 'Research', desc: 'Identify high-authority, relevant websites in your niche' },
      { step: 'Outreach', desc: '100% manual outreach to website owners and editors' },
      { step: 'Content', desc: 'Create high-quality, engaging guest post content' },
      { step: 'Publish', desc: 'Get your content published with do-follow backlinks' },
      { step: 'Monitor', desc: 'Track link performance and authority gains' },
      { step: 'Scale', desc: 'Continuously expand your guest posting footprint' },
    ],
    benefits: [
      'DA 50+ and DR 20+ authority sites',
      '1000+ organic traffic on publishing sites',
      'Permanent do-follow backlinks',
      '100% manual outreach — no automation',
      'Contextual, relevant link placement',
      'Brand exposure to new audiences',
    ],
    technologies: ['Ahrefs', 'Moz', 'BuzzSumo', 'Hunter.io', 'Pitchbox', 'Google Analytics'],
    pricing: [
      { plan: 'Plan 1', details: 'DA 50+ and DR 20+ Sites', price: '$100', features: ['1000+ Organic Traffic', 'Permanent Do-Follow Backlinks', '1 Anchor Text/Target URL', '100% Manual Outreach', 'Contextual Link'] },
      { plan: 'Plan 2', details: 'DA 50+ and DR 40+ Sites', price: '$200', features: ['1000+ Organic Traffic', 'Permanent Do-Follow Backlinks', '1 Anchor Text/Target URL', '100% Manual Outreach', 'Contextual Link'] },
    ],
  },
  {
    id: 'link-building',
    slug: 'link-building',
    title: 'Link Building Services',
    shortTitle: 'Link Building',
    icon: '🔗',
    image: linkBuildingImg,
    gallery: {
      intro: linkbuildTeam,
      process: linkbuildNetwork,
      benefits: linkbuildTech,
      strip: galleryLinkbuild,
    },
    summary: 'Strategic link building to boost your domain authority and search rankings through ethical, white-hat techniques.',
    intro: 'Doing search engine optimization can help your website grow faster. The best thing about SEO is it can give a long-term result and ensure the site\'s success. When it comes to off-page SEO, link building is the most effective method.',
    description: 'Many marketers believe that link building is the key to a website\'s success. Our expert team builds high-quality, relevant backlinks through ethical outreach, content marketing, and strategic partnerships.',
    problems: [
      'Weak backlink profile hurting search rankings',
      'Spammy links from previous SEO efforts',
      'Difficulty building relationships for natural links',
      'Competitors with stronger link profiles',
    ],
    process: [
      { step: 'Audit', desc: 'Comprehensive link profile audit and analysis' },
      { step: 'Strategy', desc: 'Custom link building strategy based on your niche' },
      { step: 'Outreach', desc: 'Manual outreach to relevant, high-authority websites' },
      { step: 'Content', desc: 'Create link-worthy content that attracts backlinks' },
      { step: 'Build', desc: 'Secure high-quality, contextual backlinks' },
      { step: 'Report', desc: 'Monthly reporting on new links and authority growth' },
    ],
    benefits: [
      'Exceptional link auditing',
      'Strategic internal linking optimization',
      'High-quality, relevant niche backlinks',
      'No spammy backlinks — ever',
      'Link-worthy quality content creation',
      'Enhanced social signals across platforms',
    ],
    technologies: ['Ahrefs', 'Majestic', 'Moz Link Explorer', 'SEMrush', 'Google Search Console', 'BuzzSumo'],
  },
  {
    id: 'keyword-ranking',
    slug: 'keyword-ranking',
    title: 'Keyword Ranking Services',
    shortTitle: 'Keywords',
    icon: '🎯',
    image: keywordImg,
    gallery: {
      intro: keywordTeam,
      process: keywordAnalysis,
      benefits: keywordStrategy,
      strip: galleryKeyword,
    },
    summary: 'Get your website ranking on page one for your target keywords. Data-driven keyword strategy that delivers real results.',
    intro: 'Keyword ranking is an SEO practice where you can check the website\'s ranking with a targeted keyword. For a particular targeted keyword, your website will appear at a specific position on the search engine result page.',
    description: 'Search engines like Google use their algorithms to measure SEO factors including internal and external links, metadata, and content. Ranking on the first page is very crucial as most traffic comes from the first page results. Our team helps you identify and rank for the most profitable keywords.',
    problems: [
      'Not ranking for profitable target keywords',
      'Losing keyword positions to competitors',
      'Targeting wrong keywords with low conversion potential',
      'Lack of keyword tracking and strategy',
    ],
    process: [
      { step: 'Research', desc: 'Comprehensive keyword research and opportunity analysis' },
      { step: 'Strategy', desc: 'Keyword mapping and content strategy development' },
      { step: 'Optimize', desc: 'On-page optimization for target keywords' },
      { step: 'Content', desc: 'Create keyword-focused, high-quality content' },
      { step: 'Build', desc: 'Authority building through strategic link acquisition' },
      { step: 'Track', desc: 'Continuous rank tracking and strategy adjustment' },
    ],
    benefits: [
      'Exceptional keyword research and analysis',
      'Strategic keyword mapping to pages',
      'Content optimization for search intent',
      'Competitor keyword gap analysis',
      'Monthly ranking reports and insights',
      'Focus on high-conversion keywords',
    ],
    technologies: ['Google Keyword Planner', 'Ahrefs', 'SEMrush', 'Moz', 'SERPstat', 'Google Search Console'],
  },
  {
    id: 'domain-authority',
    slug: 'domain-authority',
    title: 'Domain Authority Services',
    shortTitle: 'DA Services',
    icon: '📊',
    image: domainImg,
    gallery: {
      intro: domainTeam,
      process: domainAnalytics,
      benefits: domainGrowth,
      strip: galleryDomain,
    },
    summary: 'Increase your website\'s Domain Authority with proven strategies. Higher DA means better rankings and more organic traffic.',
    intro: 'Domain Authority is the Search Engine Ranking score of every website, assigned by Moz. It is a metric used to predict how well a website will rank on Google\'s SERP.',
    description: 'DA is measured from 1 to 100, with 100 indicating high domain authority. A brand new website will always start with 1, but the score will improve with time and a proper SEO strategy. iTech Manthra\'s hassle-free and affordable strategies will help you attract your target market.',
    problems: [
      'Low Domain Authority limiting search performance',
      'Difficulty competing with high-authority competitors',
      'Slow organic growth and traffic generation',
      'Unclear strategy for authority building',
    ],
    process: [
      { step: 'Audit', desc: 'Analyze current DA and identify improvement areas' },
      { step: 'Plan', desc: 'Create a custom authority building roadmap' },
      { step: 'Content', desc: 'Develop authoritative, link-worthy content' },
      { step: 'Links', desc: 'Build high-quality backlinks from authority sites' },
      { step: 'Optimize', desc: 'Technical SEO and on-page optimization' },
      { step: 'Grow', desc: 'Continuous authority building and monitoring' },
    ],
    benefits: [
      'Exceptional link auditing',
      'Internal linking optimization',
      'High-quality, relevant niche backlinks',
      'No spammy backlinks',
      'Link-worthy quality content creation',
      'Enhanced social signals across platforms',
    ],
    technologies: ['Moz', 'Ahrefs', 'SEMrush', 'Majestic', 'Google Analytics', 'Google Search Console'],
    pricing: [
      { plan: 'Bronze', target: 'DA 20', price: '$299', timeline: '45 days or less' },
      { plan: 'Silver', target: 'DA 30', price: '$499', timeline: '60 days or less' },
      { plan: 'Gold', target: 'DA 40', price: '$699', timeline: '70 days or less' },
      { plan: 'Platinum', target: 'DA 50', price: '$999', timeline: '90 days or less' },
    ],
  },
];

export const getServiceBySlug = (slug) => services.find(s => s.slug === slug);
