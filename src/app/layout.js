import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./shared/footer";
import { Navbar } from "./shared/navbar";
import Image from "next/image";

export async function generateMetadata() {
  const domainName = process.env.NEXT_PUBLIC_DOMAIN;

  return {
    title: "Sekops",
    description:
      "Empowering businesses of all sizes with affordable, easy-to-integrate, and high-impact Application Security solution",
    openGraph: {
      title: "Sekops",
      description:
        "Empowering businesses of all sizes with affordable, easy-to-integrate, and high-impact Application Security solution",
      url: process.env.NEXT_PUBLIC_DOMAIN,
      siteName: "SeKops",
      images: [
        {
          url: process.env.NEXT_PUBLIC_DOMAIN + "/images/banner.png",
          width: 2880,
          height: 1416,
        },
        {
          url: process.env.NEXT_PUBLIC_DOMAIN + "/assets/logo.svg",
          width: 146,
          height: 36,
          alt: "sekops-logo",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    icons: {
      shortcut: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <div className=" absolute bottom-0  left-0 w-full overflow-hidden">
          <div className="relative w-[1440px] 2xl:w-[1900px] h-[2300px]">
            <Image
              src="/assets/wavy-bg-form.svg"
              alt="wavy-form"
              fill
              quality={75}
            ></Image>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          pauseOnFocusLoss={false}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
