


export default function Footer() {
  return (
    <>
      <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4">آدرس ما</h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>تهران برج میلاد
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>٠٢١٦٦٠٠٦٦
            </p>
            <p className="m-0">
              <i className="fa fa-envelope mr-2"></i>coffe@gmail.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4">شبکه های اجتماعی</h4>
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <img src="/images/telegram.webp" style={{height : '24px'}}/>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <img src="/images/instafram.png" style={{height : '24px'}}/>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <img src="/images/yotube.png" style={{height : '24px'}}/>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <img src="/images/X.webp" style={{height : '24px'}}/>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4">هات کافی</h4>
            <div>
              <h6 className="text-white text-uppercase">بهترین انتخاب برای شما</h6>
              <h6 className="text-white text-uppercase">منتظرتون هستیم :)</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4">ساعت کاری</h4>
            <div>
              <h6 className="text-white text-uppercase">شنبه - پنجشنبه</h6>
              <p> ١٠ صبح الی  ١٠ شب</p>
              <h6 className="text-white text-uppercase">جمعه</h6>
              <p>٤ عصر الی ١٠ شب</p>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
          style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}
        >
          <p className="mb-2 text-white">
            نمونه از
            <a className="font-weight-bold" style={{marginRight : '10px'}} href="https://github.com/mostafakm78">
              Mostafa Kamari
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
