import React from "react";

export const Tools = () => {
  return (
    <section className="self-center min-h-[670px] w-[907px] max-w-full mt-[342px] p-6 max-md:mt-10 max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-5xl text-zinc-950 font-semibold text-center leading-none max-md:max-w-full max-md:text-[40px]">
          Works with your tools
        </h2>

        <div className="flex items-center gap-[40px_59px] flex-wrap mt-4 max-md:max-w-full">
          <div className="flex items-center gap-[5px] w-[135px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10b908dbfb4f3c57218dc9766a341ae95f62076?placeholderIfAbsent=true" className="w-[34px]" alt="GitHub" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cac2c48694b00768224f1b33bdf3c36b2dba2ce?placeholderIfAbsent=true" className="w-24" alt="GitHub text" />
          </div>

          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/556cab1f0975196e7c7296956b4153e92cb49947?placeholderIfAbsent=true" className="w-32" alt="Tool 1" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de12b59aefd3c9aa16b7078d44c9982af344e2e4?placeholderIfAbsent=true" className="w-32" alt="Tool 2" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abd99cdad7297b80e6021c468858eda149d2ff0?placeholderIfAbsent=true" className="w-32" alt="Tool 3" />

          <div className="flex items-center w-[104px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01bfa2c8a600dccaa47f4b7cb46a2afea1c65485?placeholderIfAbsent=true" className="w-[53px]" alt="Jira" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-stretch text-zinc-950 font-normal text-center mt-[179px] max-md:max-w-full max-md:mt-10">
        <h2 className="text-5xl leading-none max-md:max-w-full max-md:text-[40px]">
          Compliance-ready for
        </h2>

        <p className="text-xl leading-[1.4] mt-4 pt-1">
          Built with compliance in mind.
        </p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16ac6bd9940dfc6d03de9584bb6a3dd10ea25855?placeholderIfAbsent=true"
          className="w-12 self-center mt-4"
          alt="Compliance icon"
        />

        <div className="self-center flex w-[701px] max-w-full gap-2.5 text-base font-semibold leading-6 flex-wrap mt-4">
          <div className="flex-1 text-center">
            <h3 className="font-semibold">GDPR</h3>
            <p className="text-sm font-normal">Data protection</p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="font-semibold">FCA</h3>
            <p className="text-sm font-normal">Financial conduct</p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="font-semibold">COPPA</h3>
            <p className="text-sm font-normal">Children's online safety</p>
          </div>
        </div>
      </div>
    </section>
  );
};
