import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export const ContactUsModal = ({ isShowing, hide }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoadingForm, setLoadingForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingForm(true);
    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200) {
          toast.success("Your message has been submitted");
          setSubmitted(true);
          setLoadingForm(false);
          setName("");
          setEmail("");
          setMessage("");
          hide();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong please try again later");
        setLoadingForm(false);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            id="contact-modal"
            className="modal overflow-hidden z-[1000]"
            onClick={hide}
          >
            <button
              onClick={hide}
              id="close-modal"
              className="absolute flex items-center justify-center w-8 h-8 cursor-pointer top-2 right-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  stroke="#fff"
                  d="M6.15 17.46C5.95 17.26 5.95 16.95 6.15 16.75L16.75 6.15C16.95 5.95 17.26 5.95 17.46 6.15C17.66 6.35 17.66 6.66 17.46 6.86L6.85 17.46C6.66 17.66 6.34 17.66 6.15 17.46Z"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  stroke="#fff"
                  d="M6.15 6.15C6.35 5.95 6.66 5.95 6.86 6.15L17.47 16.76C17.67 16.96 17.67 17.27 17.47 17.47C17.27 17.67 16.96 17.67 16.76 17.47L6.15 6.85C5.95 6.66 5.95 6.34 6.15 6.15Z"
                ></path>
              </svg>
            </button>

            {/* <!-- Modal content --> */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <form
                id="contact-us"
                className="py-5 px-4 lg:p-7 bg-white rounded border border-gray-secondary xl:min-w-[600px] 2xl:min-w-[700px] w-full lg:flex-1"
              >
                <div className="w-full mb-4">
                  <label
                    htmlFor="full_name"
                    className="inline-block mb-2 text-base leading-4 text-black-primary font-inter"
                  >
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    name="full_name"
                    className="w-full p-4 text-base border rounded border-gray-third bg-white focus:outline-none text-black-primary"
                    placeholder="Full name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="email"
                    className="inline-block mb-2 text-base leading-4 text-black-primary font-inter focus:outline-none"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full p-4 text-base border rounded border-gray-third bg-white focus:outline-none text-black-primary"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="message"
                    className="inline-block mb-2 text-base leading-4 text-black-primary font-inter"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    className="w-full p-4 text-base border rounded border-gray-third bg-white text-black-primary focus:outline-none"
                    placeholder="Message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    rows="6"
                  ></textarea>
                </div>
                <div className="flex justify-end w-full">
                  <button
                    disabled={
                      name == "" ||
                      email == "" ||
                      message == "" ||
                      isLoadingForm
                    }
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="items-center min-h-[40px] flex justify-center bg-blue-primary w-32 py-2 rounded cursor-pointer text-center"
                  >
                    <div
                      className={`dot-flashing ${
                        isLoadingForm ? "block" : "hidden"
                      }`}
                    ></div>
                    <span
                      className={`font-medium  text-white ${
                        isLoadingForm ? "hidden" : "inline"
                      }`}
                    >
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;
};
