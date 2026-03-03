import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center">
      <div>
        <h1 className="font-heading font-extrabold text-7xl gradient-text mb-4">404</h1>
        <p className="text-gray-500 text-lg mb-6">Page not found</p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
