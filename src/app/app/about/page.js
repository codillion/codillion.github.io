"use client";
import "./aboutpage.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function About() {
  const routing = useRouter();
  const Navi = (e) =>{
    routing.push(e)
  }
  const [menuOpen, UpdatemenuOpen] = useState(true);
  return (
    <>  
      <div id="navbar">
        <div id="navbarlogo">
          <img src="/favicon.png" alt="Logo_Main" onClick={()=>Navi("/")}/>
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
          <Link href="/app/about" className="active">ABOUT</Link>
          <Link href="/app/donate">DONATE</Link>
          <a href="https://discord.com/invite/XCJV3sE6tZ" target="_blank">
            <img src="/discord.png" id="menudiscordlogo" />
          </a>
        </div>
      </div>


      <div id="about-main">
        <div id="abouttxt">
          <h4>Hey, This is</h4>
          <h1>AKSHAT</h1>
          <p>A teen , fully passionate for programming and computer science and the mentor of Codillion Subscribers</p>
          <div id="aboutbtn">
            <a target="_blank" href="https://akshatbisht22.github.io/"><button id="aboutbtn-portfolio">PORTFOLIO</button></a>
            <a target="_blank" href="https://github.com/akshatbisht22"><button id="aboutbtn-github">GITHUB</button></a>
            <a target="_blank" href="https://www.instagram.com/akshat_25.22/"><button id="aboutbtn-instagram">INSTAGRAM</button></a>
          </div>
        </div>

        <div id="aboutimg">
          <img src="/about.png" id="aboutimg-img" />
        </div>
      </div>
    </>
  );
}
