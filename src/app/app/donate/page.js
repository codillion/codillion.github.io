"use client";
import "./donate-page.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Donate() {
  const routing = useRouter();
  const Navi = (e) => {
    routing.push(e);
  };
  const [menuOpen, UpdatemenuOpen] = useState(true);
  return (
    <>
      <div id="navbar">
        <div id="navbarlogo">
          <img src="/favicon.png" alt="Logo_Main" onClick={() => Navi("/")} />
        </div>
        <img
          src="/menuopen.png"
          onClick={() => UpdatemenuOpen(!menuOpen)}
          id="menuopen"
        />
        <div
          className={
            menuOpen ? "navbarlinks" : "navbarlinks navbarlinks-mobile"
          }
        >
          <img
            src="/closemenu.png"
            onClick={() => UpdatemenuOpen(!menuOpen)}
            id="menuclose"
          />
          <Link href="/app/notes">NOTES</Link>
          <Link href="/app/about" className="active">
            ABOUT
          </Link>
          <Link href="/app/donate">DONATE</Link>
          <a href="https://discord.com/invite/XCJV3sE6tZ" target="_blank">
            <img src="/discord.png" id="menudiscordlogo" />
          </a>
        </div>
      </div>

      <div id="donate-main">
        <div id="donate-head">
          <h1>DONATE</h1>
          <p>DONATE AND HELP CODILLION TO GROW AND EVOLVE</p>
        </div>
        <div id="donate-body">
          <div className="donate-method">
            <div className="donateimg">
              <img src="/bhim-upi.png" alt="" />
            </div>
            <div className="donatetxt">
              <h3>DONATE USING UPI</h3>
              <p>Send donation through Unified Payments Interface (UPI)</p>
              <p>+91 9368109737</p>
            </div>
          </div>
          <div className="donate-method">
            <div className="donateimg">
            <img src="/patreon.png" />
            </div>
            <div className="donatetxt">
              <h3>DONATE USING PATREON</h3>
              <p>Send donation by purchasing memberships on patreon. Various plans are availible at various prices. So just choose one and support me.</p>
              <a target="_blank" href="https://www.patreon.com/user?u=85908012"><button id="patreon-btn">GO TO PATREON</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
