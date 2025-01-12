import Card from '@/components/shared/Card';
import { GetStaticProps } from 'next';
import { JSX } from 'react';

interface MenuProps {
  menu: any;
}

export default function Menu({ menu }: MenuProps) {
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
                ?.filter((item: { type: string }) => item.type === 'hot')
                .slice(0, 3)
                .map(
                  (
                    item: JSX.IntrinsicAttributes & {
                      title: string;
                      img: string;
                      desc: string;
                      price: number;
                      id: string | number;
                    }
                  ) => (
                    <Card key={item.id} {...item} />
                  )
                )}
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">نوشیدنی های سرد</h1>
            {menu
              ?.filter((item: { type: string }) => item.type === 'cold')
              .slice(0, 3)
              .map(
                (
                  item: JSX.IntrinsicAttributes & {
                    title: string;
                    img: string;
                    desc: string;
                    price: number;
                    id: string | number;
                  }
                ) => (
                  <Card key={item.id} {...item} />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
