import { Box } from "@chakra-ui/react";
import Contact from "../components/contact";
import Features from "../components/feature";
import Header from "../components/header";
import Banner from "../components/layout/banner";
import Review from "../components/review";
import Service from "../components/service";
import ServiceCard from "../components/serviceCard";
import Teams from "../components/teams";
export default function Home() {
     return (
          <>
               <Header />
               <Service />
               <ServiceCard />
               <Banner
                    h2="Competent Medical Senior Care"
                    hw="We are always close"
                    btn="contact us"
               />
               <Features />
               <Teams />
               <Banner
                    h2="Independent Living - For Couples"
                    text="Independent Living is a living option for residents to enjoy the freedom, services & amenities with the confidence of knowing that support is available."
                    btn="more information"
               />
               <Box height="100px" />
               <Review />
               <Contact />
          </>
     );
}
