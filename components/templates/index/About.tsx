import React from 'react';

function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
          >
            درباره ما
          </h4>
          <h1 className="display-4">تاسیس ١٣٩٤</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">داستان ما</h1>
            <h5 className="mb-3">
              یک کافه محبوب و دنج با بهترین سرویس های برای انتخاب شما
            </h5>
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
            </p>
            <a
              href=""
              className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
              بیشتر بخوانید
            </a>
          </div>
          <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="/images/about.png"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">هدف ما</h1>
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
            </p>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-3"></i>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </h5>
            <a
              href=""
              className="btn btn-primary font-weight-bold py-2 px-4 mt-2"
            >
              بیشتر بخوانید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
