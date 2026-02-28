export default function SectionHeader({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`} data-aos="fade-up">
      {label && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-accent' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2 className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''} ${light ? '!text-gray-300' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
