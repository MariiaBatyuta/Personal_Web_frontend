import { useEffect, useState } from 'react';
import Layout from '@/layouts/Layouts';
import '@/styles/global.css';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () =>
      setTimeout(() => setIsTransitioning(false), 300);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Layout>
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Component {...pageProps} />
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </QueryClientProvider>
  );
}
