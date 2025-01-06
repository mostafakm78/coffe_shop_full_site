import Header from '@/components/shared/Header';
import Services from '@/components/templates/index/Services';

export default function ServicesPage({ data }) {
  return (
    <>
      <Header title="سرویس ها" />
      <Services services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const resServices = await fetch('http://localhost:5000/services');
  const services = await resServices.json();

  return {
    props: {
      data: {
        services,
      },
    },
    revalidate: 60 * 60 * 12, // sec
  };
}
