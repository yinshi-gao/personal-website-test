import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/death_valley.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yinshi (Agnes) Gao 高印时</h2>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/contact') ? <Link to="/contact" className="button">Contact me</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
