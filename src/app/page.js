"use client";
import "./IndexPage.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, UpdatemenuOpen] = useState(true);
  const router = useRouter();
  const Navi = (e) => {
    router.push(e);
  };
  return (
    <>
      <div id="navbar">
        <div id="navbarlogo">
          <img src="favicon.png" alt="Logo_Main" />
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
            src="closemenu.png"
            onClick={() => UpdatemenuOpen(!menuOpen)}
            id="menuclose"
          />
          <Link href="/app/notes">NOTES</Link>
          <Link href="/app/about">ABOUT</Link>
          <Link href="/app/donate">DONATE</Link>
          <a href="https://discord.com/invite/XCJV3sE6tZ" target="_blank">
            <img src="discord.png" id="menudiscordlogo" />
          </a>
        </div>
      </div>

      <div id="intro-main">
        <div id="introimg">
          <img src="favicon.png" />
        </div>
        <div id="introtxt">
          <h1>CODILLION</h1>
          <p>Find source code , blogs and more</p>
          <div id="introtxt-btn">
            <Link href="/app/notes">
              <button id="blogbtn">NOTES</button>
            </Link>
            <Link href="/app/about">
              <button id="aboutmebtn">ABOUT ME</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
