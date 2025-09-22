import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Signin = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // Redirect to dashboard or home page when user is logged in
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
        <div className='w-full max-w-md'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold text-gray-900'>Welcome back</h1>
            <p className='mt-2 text-gray-600'>Please sign in to your account</p>
          </div>

          <div className='bg-white py-8 px-4 shadow-md rounded-lg sm:px-10'>
            <Auth
              redirectTo={`${window.location.origin}/`}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#404040',
                      brandAccent: '#262626',
                    },
                  },
                },
                className: {
                  container: 'w-full',
                  button: 'w-full px-4 py-2 rounded-md',
                  label: 'text-gray-700',
                  input: 'rounded-md',
                },
              }}
              supabaseClient={supabaseClient}
              providers={[]}
              //socialLayout='horizontal'
            />
          </div>

          <div className='mt-4 text-center text-sm text-gray-600'>
            <p>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='font-medium text-blue-600 hover:text-blue-500'
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // This should rarely be seen as we're redirecting logged-in users
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
    </div>
  );
};

export default Signin;
