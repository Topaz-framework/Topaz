import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="items-center bg-[rgba(255,255,255,0.75)] flex min-h-[68px] w-full flex-wrap px-8 py-4 max-md:max-w-full max-md:px-5">
      <div className="self-stretch gap-2.5 text-xl text-zinc-950 font-semibold whitespace-nowrap leading-[1.4] my-auto">
        TOPAZ
      </div>
      <nav className="self-stretch flex min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="flex min-w-60 flex-wrap max-md:max-w-full">
          <button className="items-center bg-zinc-100 flex rounded-md px-4 py-2">
            <span className="text-sm text-zinc-950 font-medium">Framework</span>
            <div className="justify-center items-center self-stretch flex w-4 pl-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f4cd21017bebc1e3f232298fc42004bc92909f1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3"
                alt="Framework icon"
              />
            </div>
          </button>

          <div className="pl-1">
            <button className="items-center flex rounded-md px-4 py-2">
              <span className="text-sm text-zinc-950 font-medium">
                Get started
              </span>
              <div className="justify-center items-center self-stretch flex w-4 pl-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/449f29534c77d242dc34e01336c0c44998388e2a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3"
                  alt="Get started icon"
                />
              </div>
            </button>
          </div>

          <Link
            to="/docs"
            className="text-sm text-zinc-950 font-medium px-4 py-2 pl-1"
          >
            Documentation
          </Link>

          <Link
            to="/contribute"
            className="text-sm text-zinc-950 font-medium px-4 py-2 pl-1"
          >
            Contribute
          </Link>

          <Link
            to="/invite"
            className="text-sm text-zinc-950 font-medium px-4 py-2 pl-1"
          >
            Invite
          </Link>

          <div className="pl-2">
            <button className="flex items-center bg-zinc-100 min-h-9 px-4 py-2 rounded-md">
              <div className="flex items-center gap-2 pr-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/020ef00d5d11f7b61aadeb60978a54c37d46e46f?placeholderIfAbsent=true" className="w-4 h-4" alt="GitHub icon" />
              </div>
              <span className="text-sm text-zinc-800 font-medium leading-none">
                topaz/topaz-framework
              </span>
            </button>
          </div>

          <div className="w-14 pl-2">
            <button className="flex items-center bg-zinc-100 min-h-9 w-full px-4 py-2 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a71d21831cf3edc7a952efdb44da2dcc8315f38?placeholderIfAbsent=true" className="w-4 h-4" alt="Filter icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
