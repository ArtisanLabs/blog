import { AppProps } from 'next/app'
import '../styles/index.css'

import Prism from 'prismjs'
import 'prism-themes/themes/prism-dracula.css' // Theme

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
