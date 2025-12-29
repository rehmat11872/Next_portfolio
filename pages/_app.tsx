import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/argon-design-system-react.css';
import '../styles/styles.css';
import '../styles/animations.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/nucleo/css/nucleo.css';
import '../styles/modern.css';
import '../styles/premium-reset.css';
import '../styles/global-black.css'; // FORCE BLACK BACKGROUND

import BackgroundAnimation from '../components/BackgroundAnimation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundAnimation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
