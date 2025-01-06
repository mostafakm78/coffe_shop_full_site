import Card from '@/components/shared/Card';
import Header from '@/components/shared/Header';

export default function MenuPage({ data }) {
  return (
    <>
      <Header title="محصولات" />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase">منو و قیمت ها</h4>
            <h1 className="display-4">قیمت های ارزان</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">نوشیدنی داغ</h1>
              <div className="row align-items-center mb-5">
                {data.menu
                  ?.filter((item) => item.type === 'hot')
                  .map((item) => (
                    <Card key={item.id} {...item} />
                  ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">نوشیدنی های سرد</h1>
              {data.menu
                ?.filter((item) => item.type === 'cold')
                .map((item) => (
                  <Card key={item.id} {...item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const resMenu = await fetch('http://localhost:5000/menu');
  const menu = await resMenu.json();

  return {
    props: {
      data: {
        menu,
      },
    },
    revalidate: 60 * 60 * 12, // sec
  };
}
