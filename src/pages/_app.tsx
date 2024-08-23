import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layouts/Layouts';
import '@/styles/global.css';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from '@/components/Loader/Loader';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

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
      <Layout>{isLoading ? <Loader /> : <Component {...pageProps} />}</Layout>
    </QueryClientProvider>
  );
}
