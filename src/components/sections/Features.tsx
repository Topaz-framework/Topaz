import React from "react";

const FeatureCard = ({ title, description, tag, tagColor }) => (
  <div className="border border-zinc-100 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-1px_rgba(0,0,0,0.06)] bg-white min-w-60 gap-4 grow shrink w-[269px] p-6 border-solid max-md:px-5">
    <h3 className="text-2xl text-zinc-950 font-semibold leading-none">
      {title}
    </h3>
    <p className="text-xl text-zinc-950 font-normal leading-7 mt-4 pt-1">
      {description}
    </p>
    <div className="justify-between flex w-full gap-[40px_100px] mt-4">
      <span className={`${tagColor} text-sm font-medium px-4 py-2 rounded-md`}>
        {tag}
      </span>
      <button className="bg-zinc-900 p-2 rounded-md">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eab1ce2f716be7610069fe37959408796b35acc?placeholderIfAbsent=true" className="w-4 h-4" alt="Arrow icon" />
      </button>
    </div>
  </div>
);

export const Features = () => {
  const features = [
    {
      title: "Foundational",
      description:
        "Kick off with clarity and purpose to align your team and long-term goals.",
      tag: "Core",
      tagColor: "bg-lime-300 text-zinc-900",
    },
    {
      title: "Research & structure",
      description:
        "Ground your design with evidence, metrics, and system flows.",
      tag: "Flexible",
      tagColor: "bg-teal-300 text-zinc-900",
    },
    {
      title: "Ethics & Boundaries",
      description:
        "Define values, constraints, and learning goals that guide your design.",
      tag: "Flexible",
      tagColor: "bg-[#FFEFBB] text-zinc-900",
    },
    {
      title: "Model behaviour",
      description:
        "Clarify capabilities and limits to support transparency and trust.",
      tag: "Core",
      tagColor: "bg-[#FFD54C] text-zinc-900",
    },
    {
      title: "Iteration & impact",
      description:
        "Continuously improve with feedback, safety nets, and testing.",
      tag: "Flexible",
      tagColor: "bg-indigo-400 text-neutral-50",
    },
    {
      title: "Final review",
      description:
        "Wrap up with confidence through clear documentation and sign-off.",
      tag: "Core",
      tagColor: "bg-zinc-300 text-zinc-900",
    },
  ];

  return (
    <section className="flex flex-col overflow-hidden items-stretch justify-center mt-[165px] px-[126px] py-[77px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <h2 className="self-center text-5xl text-zinc-950 font-semibold leading-[48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
          What's inside the <br />
          Topaz Framework?
        </h2>

        <div className="flex w-full gap-[61px_37px] flex-wrap mt-[77px] max-md:max-w-full max-md:mt-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
