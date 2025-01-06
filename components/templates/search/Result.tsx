import Card from '@/components/shared/Card';

export default function Result({ searchResult }) {
  const renderProducts = (type, title) => {
    const filteredProducts = searchResult
      ?.filter((item) => item.type === type)
      .slice(0, 3);

    return (
      <div className="col-lg-6">
        <h1 className="mb-5">{title}</h1>
        <div className="row align-items-center mb-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <Card key={item.id} {...item} />)
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
