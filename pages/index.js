import { Box } from "@chakra-ui/react";
import Features from "../components/feature";
import Header from "../components/header";
import Banner from "../components/layout/banner";
import Service from "../components/service";
import ServiceCard from "../components/serviceCard";
import Teams from "../components/teams";

export default function Home() {
     return (
          <>
               <Header />
               <Service />

               <Box height="50px" />
               <ServiceCard />
               <Banner
                    h2="Competent Medical Senior Care"
                    text="We are always close"
               />
               <Features />
               <Teams />
          </>
     );
}
