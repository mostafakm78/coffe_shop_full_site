import styles from '@/styles/Navbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch((router.query.q as string) || '');
  }, [router.query.q]);

  const searchHandlerWithEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === 'Enter') {
      if (search.trim()) {
        router.push(`/search?q=${search}`);
      }
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              هات کافی
            </h1>
          </Link>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            style={{ marginRight: '10px' }}
            className={styles.search_input}
            placeholder="جستجو محصول ..."
          />
          <FontAwesomeIcon
            onClick={searchHandler}
            className={styles.search_icon}
            icon={faSearch}
          />
        </div>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
          datatype="collapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${
                isActive('/') ? styles.active_nav_link : ''
              }`}
            >
              خانه
            </Link>
            <Link
              href="/about"
              className={`${styles.nav_link} ${
                isActive('/about') ? styles.active_nav_link : ''
              }`}
            >
              درباره ما
            </Link>
            <Link
              href="/services"
              className={`${styles.nav_link} ${
                isActive('/services') ? styles.active_nav_link : ''
              }`}
            >
              سرویس‌ها
            </Link>
            <Link
              href="/menu"
              className={`${styles.nav_link} ${
                isActive('/menu') ? styles.active_nav_link : ''
              }`}
            >
              محصولات
            </Link>
            <div className={`${styles.dropdown}`}>
              <Link
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
                datatype="dropdown"
              >
                صفحات
              </Link>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link
                  href="/reservation"
                  className={`${styles.dropdown_item} ${
                    isActive('/reservation') ? styles.active_nav_link : ''
                  }`}
                >
                  رزرو‌ها
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className={`${styles.nav_link} ${
                isActive('/contact') ? styles.active_nav_link : ''
              }`}
            >
              ارتباط با ما
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
