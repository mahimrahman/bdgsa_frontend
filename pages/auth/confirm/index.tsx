import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ConfirmPage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();
  const { token_hash, type } = router.query;

  useEffect(() => {
    const confirmEmail = async () => {
      if (!token_hash || !type) {
        return; // Wait for query params to be available
      }

      try {
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token_hash as string,
          type: 'signup',
        });

        if (error) {
          setError(error.message);
        } else {
          setSuccess(true);
          // Redirect after successful confirmation
          setTimeout(() => {
            router.push('/signin?message=Email confirmed successfully');
          }, 2000);
        }
      } catch (err) {
        setError('An unexpected error occurred');
      }
    };

    confirmEmail();
  }, [token_hash, type, router]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md'>
        {error ? (
          <div className='text-center'>
            <h2 className='text-xl font-semibold text-red-600'>Error</h2>
            <p className='mt-2 text-gray-600'>{error}</p>
            <button
              onClick={() => router.push('/signup')}
              className='mt-4 text-blue-600 hover:text-blue-500'
            >
              Back to Sign Up
            </button>
          </div>
        ) : success ? (
          <div className='text-center'>
            <h2 className='text-xl font-semibold text-green-600'>Success!</h2>
            <p className='mt-2 text-gray-600'>
              Your email has been confirmed. Redirecting to sign in...
            </p>
          </div>
        ) : (
          <div className='text-center'>
            <h2 className='text-xl font-semibold'>Confirming your email...</h2>
            <p className='mt-2 text-gray-600'>Please wait a moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
