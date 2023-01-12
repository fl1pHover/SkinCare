import {
  About,
  Contact,
  Features,
  Header,
  Review,
  Service,
  ServiceCard,
  Teams,
} from '../components';
import Banner from '../layout/banner';

export default function Home() {
  return (
    <>
      <Header />

      {/* Бидний тухай */}
      <Service />
      <ServiceCard />

      <Banner
        h2="Мон Шинжүкү скин мед"
        hw="Үргэлж танд ойрхон"
        btn="Бмдэнтэй холбогдох"
      />
      <Features />
      <Teams />
      <Banner
        h2="Independent Living - For Couples"
        text="Independent Living is a living option for residents to enjoy the freedom, services & amenities with the confidence of knowing that support is available."
        btn="more information"
      />

      {/* Tonog tuhuurumj */}
      <About />
      <Review />
      <Contact />
    </>
  );
}
