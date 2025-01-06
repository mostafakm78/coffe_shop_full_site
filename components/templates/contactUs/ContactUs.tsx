import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

function ContactDetails() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const addMessage = async (event) => {
    event.preventDefault();

    const message = {
      username,
      email,
      subject,
      body,
    };

    const res = await fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (res.status === 201) {
      setUsername('');
      setEmail('');
      setSubject('');
      setBody('');
      toast.success('پیام شما با موفقیت ارسال شد❤️');
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase">تماس با ما</h4>
          <h1 className="display-4">با ما در ارتباط باشید</h1>
        </div>
        <div className="row px-3 pb-2">
          <div className="col-sm-4 text-center mb-3">
            <FontAwesomeIcon
              style={{ height: '40px' }}
              className="mb-3 text-primary"
              icon={icons.faMapMarkerAlt}
            />
            <h4 className="font-weight-bold">آدرس</h4>
            <p>تهران برج میلاد</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <FontAwesomeIcon
              style={{ height: '40px' }}
              className="mb-3 text-primary"
              icon={icons.faPhoneAlt}
            />
            <h4 className="font-weight-bold">شماره تماس</h4>
            <p>٠٢١٦٦٠٠٦٦</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <FontAwesomeIcon
              style={{ height: '40px' }}
              className="mb-3 text-primary"
              icon={icons.faEnvelope}
            />
            <h4 className="font-weight-bold">ایمیل</h4>
            <p>coffe@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pb-5">
            <iframe
              style={{ width: '100%', height: '443px' }}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=milad tower&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="col-md-6 pb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="control-group">
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    type="text"
                    className="form-control bg-transparent p-4"
                    id="name"
                    placeholder="نام کامل"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    className="form-control bg-transparent p-4"
                    id="email"
                    placeholder="ایمیل"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    type="text"
                    className="form-control bg-transparent p-4"
                    id="subject"
                    placeholder="موضوع"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    className="form-control bg-transparent py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="پیام شما"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                    onClick={addMessage}
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
