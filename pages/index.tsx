import About from '@/components/templates/index/About';
import Menu from '@/components/templates/index/Menu';
import Offer from '@/components/templates/index/Offer';
import Reservation from '@/components/templates/index/Reservation';
import Services from '@/components/templates/index/Services';
import Slider from '@/components/templates/index/Slider';


export default function Home({ data }: any) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu}/>
      <Reservation />
    </>
  );
}

export async function getStaticProps() {
  const resServices = await fetch('http://localhost:5000/services');
  const services = await resServices.json();

  const resMenu = await fetch('http://localhost:5000/menu');
  const menu = await resMenu.json()

  return {
    props: {
      data: {
        services,
        menu
      },
    },
    revalidate: 60 * 60 * 12, // sec
  };
}
