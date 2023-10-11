/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import useModal from "../hooks/useModal";
import { ContactUsModal } from "../shared/contact-us-modal";

export const ContactUs = () => {
  const { isShowing, toggle } = useModal();

  return (
    <section
      id="contact-us"
      className="relative z-50 md:px-[130px] px-6 sm:px-10  justify-center flex flex-col items-center  pt-[136px] pb-[109px] bg-cta-gradient w-full"
    >
      <h2 className="text-[50px] text-center mb-6  w-full md:max-w-[630px] leading-[70px]">
        Interested in our solution? Contact us now!
      </h2>
      <p className="text-black-primary text-[18px] font-normal text-center w-full xl:max-w-[45%] sm:max-w-[75%] flex justify-center mb-7">
        Empowering businesses of all sizes with affordable, easy-to-integrate,
        and high-impact Application Security solution.
      </p>

      <div className="flex items-center justify-center px-6 sm:px-0 flex-col sm:flex-row sm:gap-9 gap-4 w-full">
        <button
          className="bg-blue-primary sm:w-[150px] w-full h-[56px] rounded"
          onClick={toggle}
        >
          <span className="font-medium text-[15px] text-[#fff] leading-6">
            Contact Us
          </span>
        </button>
        <button
          className="bg-orange-primary sm:w-[150px] w-full h-[56px] rounded"
          onClick={toggle}
        >
          <span className="font-medium text-[15px] text-[#fff] leading-6">
            Book a demo
          </span>
        </button>
      </div>
      <ContactUsModal isShowing={isShowing} hide={toggle} />
    </section>
  );
};
