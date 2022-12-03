import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
     return (
          <>
               <Head>
                    <title>Skin</title>
                    <meta name="description" content="Skin" />
                    {/* <link rel="icon" href="/favicon.ico" /> */}
               </Head>
               <div>{children}</div>
          </>
     );
};

export default Layout;
