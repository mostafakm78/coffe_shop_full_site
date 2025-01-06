import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Reservation() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [option, setOption] = useState('0');

  const addReservHandler = async (event) => {
    event.preventDefault();

    const res = await fetch('http://localhost:5000/reserv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, fullName, date, time, option }),
    });
    console.log(res);

    if (res.status === 201) {
      setEmail('');
      toast.success('رزرو شما انجام شد منتظرتون هستیم :)');
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">٣٠ % تخفیف</h1>
                  <h1 className="text-white">برای رزرو آنلاین</h1>
                </div>
                <p className="text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <FontAwesomeIcon
                      className="text-primary mr-3"
                      icon={icons.faCheck}
                    />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است
                  </li>
                  <li className="py-2">
                    <FontAwesomeIcon
                      className="text-primary mr-3"
                      icon={icons.faCheck}
                    />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است
                  </li>
                  <li className="py-2">
                    <FontAwesomeIcon
                      className="text-primary mr-3"
                      icon={icons.faCheck}
                    />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک استt
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: 'rgba(51, 33, 29, .8)' }}
              >
                <h1 className="text-white mb-4 mt-5">میز خود را رزرو کنید</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="نام شما"
                      required={true}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="ایمیل"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="تاریخ"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="ساعت"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: '49px' }}
                      defaultValue="0"
                      onChange={(e) => setOption(e.target.value)}
                    >
                      <option value="0">نفرات</option>
                      <option value="1">یک نفر</option>
                      <option value="2">دو نفر</option>
                      <option value="3">سه نفر</option>
                      <option value="3">چهار نفر</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                      onClick={addReservHandler}
                    >
                      رزرو شود
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
