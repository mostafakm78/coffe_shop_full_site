import Menu from '@/components/templates/index/Menu';
import ProductsDetails from '@/components/templates/products/Products';

export default function SingleProduct({ menu , product }) {
  return (
    <>
      <ProductsDetails data={product} />
      <Menu menu={menu}/>
    </>
  );
}

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:5000/menu`);
  const product = await res.json();

  const paths = product.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/menu/${params.id}`);
  const product = await res.json();

  const resMenu = await fetch('http://localhost:5000/menu');
    const menu = await resMenu.json()

  return {
    props: {
      product,
      menu
    },
  };
}
