import ServiceItem from '@/components/shared/ServiceItem';
import { Key } from 'react';

export default function Services({ services } : any) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase">سرویس ما</h4>
          <h1 className="display-4">تازه و کاملا اورگانیک</h1>
        </div>
        <div className="row">
          {services.map(
            (service: {
              id: Key | null | undefined;
              title: unknown;
              desc: unknown;
              img: unknown;
              icon: unknown;
            }) => (
              <ServiceItem
                key={service.id}
                title={service.title}
                desc={service.desc}
                img={service.img}
                icon={service.icon}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
