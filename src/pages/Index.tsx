import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Tools } from "@/components/sections/Tools";
import { Footer } from "@/components/layout/Footer";

export default function Index() {
  return (
    <div className="flex flex-col relative min-h-[3598px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecf7c0cd19e0de0601ab1c50b00a2aa48112201?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background pattern"
      />

      <main className="relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)] bg-white flex w-full flex-col items-stretch rounded-lg max-md:max-w-full">
        <Header />
        <Hero />
        <Features />

        <section className="self-center flex items-center gap-[13px] flex-wrap mt-[292px] max-md:max-w-full max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de24ebaf27f3bdb48983b85cf19a736e1d744cb6?placeholderIfAbsent=true"
            className="aspect-[1.14] object-contain w-[468px] self-stretch min-w-60 my-auto max-md:max-w-full"
            alt="Get started illustration"
          />

          <div className="self-stretch min-w-60 gap-4 w-[448px] my-auto p-6 max-md:max-w-full max-md:px-5">
            <h2 className="text-5xl text-zinc-950 font-semibold leading-[48px] max-md:text-[40px] max-md:leading-[45px]">
              How do you want to get started?
            </h2>

            <div className="text-xl text-zinc-950 font-normal leading-7 mt-4 pt-1">
              <p>
                Pick one cluster or work through the full framework at your own
                pace.
                <br />
                <br />
                Design a new prototype
                <br />
                Review an existing AI project
                <br />
                Prepare for a team review
              </p>
            </div>

            <div className="flex gap-2.5 mt-4">
              <button className="flex-1 bg-zinc-100 text-zinc-900 rounded-md py-2 px-4 text-sm font-medium">
                See key decisions
              </button>
              <button className="flex-1 bg-zinc-900 text-neutral-50 rounded-md py-2 px-4 text-sm font-medium">
                View a short video
              </button>
            </div>
          </div>
        </section>

        <Tools />
        <Footer />
      </main>
    </div>
  );
}
