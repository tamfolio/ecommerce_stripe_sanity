import '../styles/globals.css'
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';
import toast, {Toaster} from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
  <StateContext>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </StateContext>
  )
}

export default MyApp
