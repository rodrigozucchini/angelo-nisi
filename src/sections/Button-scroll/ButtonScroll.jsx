import React from "react";
import "./ButtonScroll.css";
import ScrollToTop from "react-scroll-to-top";

export default function ButtonScroll() {
  return (
    <>
      <ScrollToTop className="scroll-button" smooth color="#000" />
    </>
  );
}