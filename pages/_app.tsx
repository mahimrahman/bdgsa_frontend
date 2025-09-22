import { useState } from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

// auth
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

// components
import MainLayout from '@/components/layouts/MainLayout';

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  // Check if it's a 404 page
  const is404 = (Component as any).is404;

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {is404 ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </SessionContextProvider>
  );
}
