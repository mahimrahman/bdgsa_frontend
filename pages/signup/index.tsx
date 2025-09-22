'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: `${firstName} ${lastName}`,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
        <div className='w-full max-w-md text-center'>
          <div className='bg-white p-8 shadow-md rounded-lg'>
            <svg
              className='mx-auto h-12 w-12 text-green-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <h2 className='mt-4 text-2xl font-bold text-gray-900'>
              Check your email
            </h2>
            <p className='mt-2 text-gray-600'>
              We&apos;ve sent a verification link to{' '}
              <span className='font-medium'>{email}</span>
            </p>
            <div className='mt-6'>
              <Link
                href='/signin'
                className='text-sm font-medium text-blue-600 hover:text-blue-500'
              >
                Return to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold text-gray-900'>Create account</h1>
          <p className='mt-2 text-gray-600'>Please fill in your details</p>
        </div>

        <div className='bg-white py-8 px-4 shadow-md rounded-lg sm:px-10'>
          <form onSubmit={handleSignUp} className='space-y-6'>
            {error && (
              <div className='bg-red-50 text-red-500 p-3 rounded-md text-sm'>
                {error}
              </div>
            )}

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First name
                </label>
                <input
                  id='firstName'
                  type='text'
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last name
                </label>
                <input
                  id='lastName'
                  type='text'
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>
        </div>

        <div className='mt-4 text-center text-sm text-gray-600'>
          <p>
            Already have an account?{' '}
            <Link
              href='/signin'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
