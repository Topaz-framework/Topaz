
import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="self-center w-full max-w-[1064px] ml-[22px] mt-[89px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col stroke-[4px] stroke-white overflow-hidden relative min-h-[560px] grow items-stretch justify-center py-px max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9192164191ffecb24446b16ef1507965163d15bd?placeholderIfAbsent=true"
              alt="Hero background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc58a662778035b1548c6c2705408174fe6f0fc?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="aspect-[0.99] object-contain w-full max-md:max-w-full max-md:-mr-0.5"
            />
          </div>
        </div>

        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full self-stretch gap-4 my-auto p-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <h1 className="text-5xl text-zinc-950 font-semibold leading-[48px] max-md:text-[40px] max-md:leading-[45px]">
              Design better GenAI projects, step by step.
            </h1>

            <p className="text-xl text-zinc-950 font-normal leading-7 mt-4 pt-1">
              A clustered 18-step framework to help you define goals, map
              constraints, align collaborators, research and evaluate model
              behavior— together.
            </p>

            <div className="flex gap-2.5 mt-4">
              <Link to="/framework" className="flex-1">
                <button className="w-full bg-zinc-100 text-zinc-900 rounded-md py-2 px-4 text-sm font-medium">
                  Detailed journey
                </button>
              </Link>
              <Link to="/framework" className="flex-1">
                <button className="w-full bg-zinc-900 text-neutral-50 rounded-md py-2 px-4 text-sm font-medium">
                  Quick start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
