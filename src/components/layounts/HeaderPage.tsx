"use client";
import Link from "next/link";
import React, { useState } from "react";

const HeaderPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div>
        <div className={click ? "main-container" : ""} onClick={closeMenu} />
        <nav className="navbar" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          <div className="nav-container">
            <Link href="/" className="nav-logo" onClick={closeMenu}>
              CodeBucks <i className="fa fa-code"></i>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  href="/CandidateRegister"
                  className="nav-links"
                  onClick={closeMenu}
                >
                  Register Candidate
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/voter" className="nav-links" onClick={closeMenu}>
                  Register Voters
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-links" onClick={closeMenu}>
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-links" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderPage;
