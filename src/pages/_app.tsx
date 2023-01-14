import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { AppThemeProvider } from '@/common/components';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </AppThemeProvider>
  );
}

export default App;
