import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-dark">
      <p className="text-xs uppercase tracking-widest font-bold text-primary dark:text-indigo-400 mb-2">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Page not found
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-colors shadow-sm"
      >
        Go back home
      </Link>
    </div>
  );
}

