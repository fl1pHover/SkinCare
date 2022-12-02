import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import theme from "../lib/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
     return (
          <ChakraProvider theme={theme}>
               <Layout>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
               </Layout>
          </ChakraProvider>
     );
}

export default MyApp;
