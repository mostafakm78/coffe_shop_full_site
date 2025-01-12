import Header from '@/components/shared/Header';

export default function NotFound() {
  return (
    <>
      <Header title="404" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Vazirmatn',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          404-NotFound
        </p>
        <p
          style={{
            fontFamily: 'Vazirmatn',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          متاسفانه همچین صفحه ای پیدا نشد
        </p>
      </div>
    </>
  );
}
