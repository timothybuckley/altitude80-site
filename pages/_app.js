// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
 


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;