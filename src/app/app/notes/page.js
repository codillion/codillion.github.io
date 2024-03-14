/* eslint-disable */
import "./notes.css";
// import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "./navbar.js";

const getNotes = async () => {
  const api_url = process.env.API_URL;
  try {
    const res = await fetch(`${api_url}/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error MongoDB", error);
  }
};

export default async function Notes() {
  const { topics } = await getNotes();
  // const routing = useRouter();
  const Navi = (e) => {
    routing.push(e);
  };
  // const [menuOpen, UpdatemenuOpen] = useState(true);
  return (
    <>
        <div id="noteshtmlbody">
    <Navbar />
          <div id="notes-main">
            <div id="notes-head">
              <h2>ACCESS THE NOTES</h2>
              <p>Notes of every video can be found here</p>
            </div>
      {topics.map((t) => (
            <div id="notes-body" class={t._id}>
              <div className="notes-container">
                <img src="/task.png" alt="Task_Png" />
                <div className="notescont-txt">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <a target="_blank" href={t.notepath}>
                    <button>DOWNLOAD NOTES</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
    </>
  );
}
