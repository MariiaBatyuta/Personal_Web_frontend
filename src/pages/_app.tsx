import Layout from '@/layouts/Layouts';
import '@/styles/global.css';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader/Loader';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const LazyComponent = dynamic(() => Promise.resolve(Component), {
    ssr: false,
    loading: () => <Loader />,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Layout>
        <LazyComponent {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
