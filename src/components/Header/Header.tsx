'use client';

import clsx from 'clsx';
import css from './Header.module.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const pathname = usePathname();

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen((prev) => !prev);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  const isActivePage = (patch: string) => pathname === patch;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={clsx(css.header, { [css.fixed]: isHeaderFixed })}>
      <button className={css.burger} onClick={toggleBurgerMenu}>
        &#9776;
      </button>
      <div className={clsx(css.navMenu, { [css.open]: isBurgerMenuOpen })}>
        <Link
          href="/"
          className={clsx(css.link, { [css.active]: isActivePage('/') })}
          onClick={closeBurgerMenu}
        >
          About
        </Link>
        <Link
          href="/skills"
          className={clsx(css.link, { [css.active]: isActivePage('/skills') })}
          onClick={closeBurgerMenu}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className={clsx(css.link, {
            [css.active]: isActivePage('/projects'),
          })}
          onClick={closeBurgerMenu}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={clsx(css.link, { [css.active]: isActivePage('/contact') })}
          onClick={closeBurgerMenu}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
