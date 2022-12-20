import {
     About,
     Contact,
     Features,
     Header,
     Review,
     Service,
     ServiceCard,
     Teams,
} from "../components";
import Banner from "../components/layout/banner";

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

               <About />
               <Review />
               <Contact />
          </>
     );
}
