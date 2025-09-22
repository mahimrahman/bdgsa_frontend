import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import Navbar from '@/components/common/navbar';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      {!session ? (
        // Landing Page for unauthenticated users
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <img
                alt='Students'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
                height='550'
                src='/homepage/hero_image.png'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Welcome to Our Student Community!
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Join a vibrant and diverse group of students who are
                    passionate about learning, growing, and making a difference
                    in the world.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link
                    className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                    href='/signup'
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Dashboard for authenticated users
        <section className='container mx-auto px-4 py-8'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Add your dashboard components here */}
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>
                Welcome back, {session.user?.email}
              </h2>
              {/* Add dashboard content */}
            </div>
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>Your Progress</h2>
              {/* Add progress content */}
            </div>
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>Recent Activity</h2>
              {/* Add activity content */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
