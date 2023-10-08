/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="relative z-50 px-[130px]  justify-center flex flex-col items-center  pt-[136px] pb-[109px] bg-cta-gradient w-full"
    >
      <h2 className="text-[50px] text-center mb-6  max-w-[630px] leading-[70px]">
        Interested in our solution? Contact us now!
      </h2>
      <p className="text-black-primary text-[18px] font-normal text-center max-w-[45%] flex justify-center mb-7">
        Empowering businesses of all sizes with affordable, easy-to-integrate,
        and high-impact Application Security solution.
      </p>

      <div className="flex items-center justify-center">
        <button className="bg-blue-primary w-[150px] h-[56px] rounded mr-9">
          <span className="font-medium text-[15px] text-[#fff] leading-6">
            Contact Us
          </span>
        </button>
        <button className="bg-orange-primary w-[150px] h-[56px] rounded">
          <span className="font-medium text-[15px] text-[#fff] leading-6">
            Book a demo
          </span>
        </button>
      </div>
    </section>
  );
};
