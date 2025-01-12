import Card from '@/components/shared/Card';
import { JSX } from 'react';

export default function Result({ searchResult }: any) {
  const renderProducts = (type: any, title: any) => {
    const filteredProducts = searchResult
      ?.filter((item: { type: any }) => item.type === type)
      .slice(0, 3);

    return (
      <div className="col-lg-6">
        <h1 className="mb-5">{title}</h1>
        <div className="row align-items-center mb-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(
              (
                item: JSX.IntrinsicAttributes & {
                  title: string;
                  img: string;
                  desc: string;
                  price: number;
                  id: string | number;
                }
              ) => <Card key={item.id} {...item} />
            )
          ) : (
            <p>محصولی برای نمایش وجود ندارد.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          {renderProducts('hot', 'نوشیدنی داغ')}
          {renderProducts('cold', 'نوشیدنی های سرد')}
        </div>
      </div>
    </div>
  );
}
