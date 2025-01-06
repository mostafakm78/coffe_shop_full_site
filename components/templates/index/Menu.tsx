import Card from '@/components/shared/Card';

export default function Menu({ menu }) {
  return (
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
              {menu
                ?.filter((item) => item.type === 'hot')
                .slice(0, 3)
                .map((item) => (
                  <Card key={item.id} {...item} />
                ))}
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">نوشیدنی های سرد</h1>
            {menu
              ?.filter((item) => item.type === 'cold')
              .slice(0, 3)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
