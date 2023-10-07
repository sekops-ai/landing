/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const WhySekops = () => {
  return (
    <section
      id="why-sekops"
      className="px-[70px] flex justify-between  mt-[154px] pt-[52px]"
    >
      <div id="why-sekops-bg" className="relative top-[-100px] flex-1">
        <div className="absolute z-10 top-0 left-0">
          <Image
            src="/assets/why-sekops-circle.svg"
            alt="why-sekops"
            width={862}
            height={600}
          ></Image>
        </div>
        <Image
          className="relative z-50"
          src="/assets/why-sekops-bg.svg"
          alt="why-sekops-bg"
          width={600}
          height={601}
        ></Image>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="text-[50px] font-medium leading-[48px] capitalize mb-8 text-black-primary">
          Why Choose SekOps?
        </h2>
        <ul className="flex flex-col">
          <li className="mb-3 ">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center">
              <Image
                src="/assets/icons/star.svg"
                alt="star"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Instant Value
            </h4>
            <p className="text-gray-primary capitalize leading-7">
              With minimal setup time, immediately witness the high return of
              investment.
            </p>
          </li>
          <li className="mb-3  ">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center">
              <Image
                src="/assets/icons/settings.svg"
                alt="star"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Ease of integration
            </h4>
            <p className="text-gray-primary capitalize leading-7">
              SekOps seamlessly integrates with your projects, without code
              changes or workflow disruptions.
            </p>
          </li>
          <li className="mb-3 ">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center">
              <Image
                src="/assets/icons/union.svg"
                alt="union"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Pull based security scanning
            </h4>
            <p className="text-gray-primary capitalize leading-7">
              Detect and address vulnerabilities by proactively scanning
              projects, ensuring you're always a step ahead in security.
            </p>
          </li>
          <li className="mb-3 ">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center">
              <Image
                src="/assets/icons/heart.svg"
                alt="heart"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Built for Everyone & Cost-Effective
            </h4>
            <p className="text-gray-primary capitalize leading-7">
              From startups to enterprises, our platform is designed to be
              affordable and accessible for businesses of every size. Enjoy your
              high ROI with SekOps!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
