import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Bounce, ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
        style={{fontFamily : 'Vazirmatn'}}
      />
    </>
  );
}
