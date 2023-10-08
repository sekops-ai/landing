/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const Features = () => {
  return (
    <section
      id="features"
      className="px-[130px]  justify-between  py-[100px]  relative w-full bg-features-gradient"
    >
      <h2 className="text-[50px] text-center mb-7 leading-none">Features</h2>
      <p className="text-center text-black-primary font-medium leading-7 mb-[100px]">
        SekOps performs all types of security scans and supports every
        programming language!
      </p>

      <ul className="flex justify-between items-center flex-wrap">
        <li className="flex flex-col items-center justify-center flex-[0_0_259px]">
          <Image
            src="/assets/static-scan.svg"
            alt="static-scan"
            width={80}
            height={80}
            className="mb-[14px]"
          ></Image>
          <h3 className="text-black-primary text-[32px] mb-[14px] leading-10 font-normal">
            Static scan
          </h3>
          <span className="text-black-primary text-base font-light leading-6 text-center">
            Analyze source code for security flaws and leaked secrets
          </span>
        </li>
        <li className="flex flex-col items-center justify-center flex-[0_0_285px]">
          <Image
            src="/assets/supply-chain.svg"
            alt="supply-chain"
            width={80}
            height={80}
            className="mb-[14px]"
          ></Image>
          <h3 className="text-black-primary text-[32px] leading-10 mb-[14px] font-normal">
            Supply Chain Scan
          </h3>
          <span className="text-black-primary text-base font-light leading-6 text-center">
            Examine software dependencies for known vulnerabilities
          </span>
        </li>
        <li className="flex flex-col items-center justify-center flex-[0_0_295px]">
          <Image
            src="/assets/infra-scan.svg"
            alt="infra-scan"
            width={80}
            height={80}
            className="mb-[14px]"
          ></Image>
          <h3 className="text-black-primary text-[32px] mb-[14px] leading-10 font-normal">
            Infrastructure Scan
          </h3>
          <span className="text-black-primary text-base font-light leading-6 text-center">
            Assess container and Infrastructure as Code security
          </span>
        </li>
      </ul>
    </section>
  );
};
