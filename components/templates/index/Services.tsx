import ServiceItem from '@/components/shared/ServiceItem';


export default function Services({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase">سرویس ما</h4>
          <h1 className="display-4">تازه و کاملا اورگانیک</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem key={service.id}
              title={service.title}
              desc={service.desc}
              img={service.img}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
