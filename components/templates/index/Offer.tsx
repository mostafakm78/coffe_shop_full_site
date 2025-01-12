import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Offer() {
  const [email, setEmail] = useState('');

  const addEmail = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const res = await fetch('http://localhost:5000/newsLetters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    console.log(res);
    if (res.status === 201) {
      setEmail('');
      toast.success('تخفیف ها برای شما ارسال خواهد!');
    }
  };

  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3"> ٥٠ % تخفیف!</h1>
        <h1 className="text-white mb-3">تخفیف های استثنایی</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          برای با خبر شدن از تخفیف ها عضو بشین
        </h4>
        <form className="form-inline justify-content-center mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder="ایمیل خود را وارد کنید"
              style={{ height: '60px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-group-append">
              <button
                onClick={addEmail}
                className="btn btn-primary font-weight-bold px-4"
                type="submit"
              >
                عضویت
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
