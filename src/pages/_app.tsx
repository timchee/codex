import '@/styles/globals.css'
// import '@./components/styles/navbar.css'
import type { AppProps } from 'next/app'
// import GjIcon from "@gjirafatech/gjirafa-icons/GjIcon";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
