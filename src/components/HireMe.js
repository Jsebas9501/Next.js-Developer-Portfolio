import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed right-4 top-20 flex items-center justify-center overflow-hidden"
      style={{ position: "fixed" }}
    >
      <div className="w-64 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:jsebas9501@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Here Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
