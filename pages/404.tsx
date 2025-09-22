import { useEffect, useState } from 'react';

export default function Custom404() {
  // Add client-side only rendering to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-900 dark:text-gray-100'>
          404
        </h1>
        <p className='mt-4 text-xl text-gray-600 dark:text-gray-400'>
          Page not found
        </p>
        <p className='mt-2 text-gray-500 dark:text-gray-500'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
    </div>
  );
}

Custom404.is404 = true;
