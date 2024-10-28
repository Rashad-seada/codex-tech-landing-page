import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
// import { Cairo } from '@next/font/google';
// const cairo = Cairo({ subsets: ['arabic'], weight: '900' });

import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])
  return <main>
  <Component {...pageProps} />
</main>
}

export default MyApp