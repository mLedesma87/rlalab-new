
import { useEffect } from "react";
import AOS from "aos";

import '../styles/globals.css'
import "aos/dist/aos.css";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({once:true});
  }, []);
  return <Component {...pageProps} />
}

export default MyApp;
