import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
     return (
          <>
               <Head>
                    <title>BOM</title>
                    <meta name="description" content="Bom, zariin site" />
                    {/* <link rel="icon" href="/favicon.ico" /> */}
               </Head>
               <div>{children}</div>
          </>
     );
};

export default Layout;
