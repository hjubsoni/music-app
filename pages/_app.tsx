import '../styles/globals.css';
import type { AppType } from 'next/app';
import { Space_Grotesk } from '@next/font/google';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${spaceGrotesk.variable} font-sans h-full`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
