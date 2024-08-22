import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '@/layouts/Layouts';
import '@/styles/global.css';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};