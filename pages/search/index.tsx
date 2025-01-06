import Header from '@/components/shared/Header';
import Result from '@/components/templates/search/Result';

export default function Search( {data} ) {
  return (
    <>
      <Header title="جستجو" />
      <Result searchResult={data}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch('http://localhost:5000/menu');
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );
  return {
    props: {
      data: searchResult,
    },
  };
}
