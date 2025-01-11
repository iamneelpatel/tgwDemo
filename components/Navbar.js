import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

/*  const toggleAboutDropdown = () => setAboutDropdown(!aboutDropdown); 
  const toggleServicesDropdown = () => setServicesDropdown(!servicesDropdown); */

  return (
    <nav className="navbar">
      <div className="navbar-brand">The Growing Wolf</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        
        {/* About Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <a href="#" className="dropdown-link">
            About <span className="caret">&#9662;</span>
          </a>
          <ul className={`dropdown-menu ${aboutDropdown ? 'show' : ''}`}>
            <li><Link href="/about/company">Company</Link></li>
            <li><Link href="/about/team">Team</Link></li>
            <li><Link href="/about/careers">Careers</Link></li>
          </ul>
        </li>

        {/* Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <a href="#" className="dropdown-link">
            Services <span className="caret">&#9662;</span>
          </a>
          <ul className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/consulting">Consulting</Link></li>
          </ul>
        </li>

        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
