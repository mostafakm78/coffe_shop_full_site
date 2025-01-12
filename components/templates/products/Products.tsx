import styles from '@/styles/Product.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ProductsDetails = ({ data } : any) => {
  return (
    <div
      className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
    >
      <img
        className={`${styles.product_img}  mb-3 mb-sm-0`}
        src={data.img}
        alt=""
      />
      <div className={styles.details_product}>
        <h4 className="text-white mb-3">{data.title}</h4>
        <hr style={{ borderColor: 'white' }} />
        <div className={styles.stars}>
          {Array.from({ length: Math.trunc(data.score) }, (_, index) => (
            <FontAwesomeIcon
              key={`filled-${index}`}
              className={styles.fill_star}
              icon={faStar}
            />
          ))}
          {Array.from({ length: 5 - Math.trunc(data.score) }, (_, index) => (
            <FontAwesomeIcon
              key={`empty-${index}`}
              className={styles.empty_star}
              icon={faStar}
            />
          ))}
        </div>
        <div className={styles.price_details}>
          {data.off ? (
            <>
              <p>
                {Math.round(data.price - (data.price * data.off) / 100)}هزار
                تومان
              </p>
              <p>{data.price}هزار تومان</p>
            </>
          ) : (
            <p>{data.price}هزار تومان </p>
          )}
        </div>
        <p style={{ color: '#fff' }} className="m-0 pr-5">
          {data.desc}
        </p>
        <button className={styles.shopping_btn}>
          خرید
          <FontAwesomeIcon
            className="ml-2"
            style={{ marginRight: '10px' }}
            icon={faShoppingBag}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
