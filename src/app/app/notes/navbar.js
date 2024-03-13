"use client";
import "./notes.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
    

export default function Navbar() {
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
          <Link href="/app/about">ABOUT</Link>
          <Link href="/app/donate">DONATE</Link>
          <a href="https://discord.com/invite/XCJV3sE6tZ" target="_blank">
            <img src="/discord.png" id="menudiscordlogo" />
          </a>
        </div>
      </div>
    </>
  );
}
