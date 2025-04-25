import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="items-center flex min-h-[68px] w-full text-xs text-zinc-800 font-medium leading-none flex-wrap px-8 mt-[37px] py-4 max-md:max-w-full max-md:px-5">
      <div className="self-stretch w-[117px] my-auto pl-2">
        <div className="items-center flex min-h-9 w-full rounded-md">
          <span className="self-stretch">©2025 Topaz</span>
        </div>
      </div>

      <nav className="self-stretch flex min-w-60 items-center whitespace-nowrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Link to="/about" className="px-4 py-2 pl-2">
          About
        </Link>
        <Link to="/privacy" className="px-4 py-2 pl-2">
          Privacy
        </Link>
        <Link to="/terms" className="px-4 py-2 pl-2">
          Terms
        </Link>
        <Link to="/accessibility" className="px-4 py-2 pl-2">
          Accessibility
        </Link>
        <Link to="/help" className="px-4 py-2 pl-2">
          Help
        </Link>
      </nav>
    </footer>
  );
};
