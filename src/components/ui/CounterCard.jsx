import { useState, useEffect, useRef } from 'react';

export default function CounterCard({ number, label, light = false }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, numericValue]);

  return (
    <div ref={ref} className="text-center" data-aos="fade-up">
      <div className={`text-4xl md:text-5xl font-heading font-extrabold mb-2 ${light ? 'text-white' : 'gradient-text'}`}>
        {count}{suffix}
      </div>
      <p className={`text-sm font-medium uppercase tracking-wider ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        {label}
      </p>
    </div>
  );
}
