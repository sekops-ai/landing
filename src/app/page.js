import Image from "next/image";
import { ContactUs } from "./components/contact-us";
import { Features } from "./components/features";
import { Footer } from "./shared/footer";
import { TechSupported } from "./components/tech-supported";
import { WhySekops } from "./components/why-sekops";
import { Navbar } from "./shared/navbar";

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <section id="hero" className="min-h-screen w-full relative">
        <div id="bg-hero-circles" className="flex items-center justify-center">
          <Image
            src="/assets/circles-1x.svg"
            alt="ciircles-bg"
            width={1440}
            height={1305}
            priority={true}
          />
        </div>
        <div className="absolute left-0 top-0">
          <Image
            src="/assets/hero-elipse-left.svg"
            alt="bg-elipse-left"
            width={505}
            height={1126}
          />
        </div>
        <div className="absolute right-0 bottom-0 z-30">
          <Image
            src="/assets/hero-elipse-right.svg"
            alt="bg-elipse-right"
            width={505}
            height={1126}
          />
        </div>
        <Navbar></Navbar>
        <div
          id="hero-description"
          className="z-[100] absolute translate-x-[-50%] xl:top-[25%] base:top-[30%] sm:top-[35%] top-[32%] left-[50%] translate-y-[-50%] flex flex-col items-center xl:w-auto w-11/12"
        >
          <h1 className="base:mb-8 mb-6 text-black-primary 2xl:text-[70px] xl:text-[60px] base:text-[55px] text-[40px] capitalize base:leading-[90px] leading-[60px] text-center font-semibold">
            Application security for everyone
          </h1>
          <p className="text-black-primary text-[18px] font-normal text-center sm:max-w-[75%] max-w-full flex justify-center">
            Empowering businesses of all sizes with affordable,
            easy-to-integrate, and high-impact Application Security solution
          </p>
        </div>
        <div
          id="languages-logos"
          className="xl:block hidden z-50 top-0 absolute w-full h-full"
        >
          <div id="k-8" className="absolute top-[212px] left-[163px]">
            <Image src="/assets/k8.svg" alt="k-8" width={191} height={191} />
          </div>
          <div id="php" className="absolute top-[154px] right-[171px]">
            <Image src="/assets/php.svg" alt="php" width={191} height={191} />
          </div>
          <div id="python" className="absolute top-[410px] left-[89px]">
            <Image
              src="/assets/python.svg"
              alt="php"
              width={191}
              height={191}
            />
          </div>
          <div id="react" className="absolute top-[459px] left-[275px]">
            <Image
              src="/assets/react.svg"
              alt="react"
              width={191}
              height={191}
            />
          </div>
          <div id="gitlab" className="absolute top-[269px] right-[80px]">
            <Image
              src="/assets/gitlab.svg"
              alt="gitlab"
              width={191}
              height={191}
            />
          </div>
          <div id="angular" className="absolute top-[367px] right-[280px]">
            <Image
              src="/assets/angular.svg"
              alt="angular"
              width={191}
              height={191}
            />
          </div>
          <div id="spring" className="absolute top-[569px] right-[100px]">
            <Image
              src="/assets/spring.svg"
              alt="spring"
              width={191}
              height={191}
            />
          </div>
          <div id="js" className="absolute top-[636px] left-[131px]">
            <Image src="/assets/js.svg" alt="js" width={191} height={191} />
          </div>
        </div>

        <div
          id="demo-screens"
          className="absolute base:bottom-0 base:top-[350px] sm:top-[300px] top-[430px]  sm:left-10 lg:translate-x-[-50%] lg:left-[50%] xl:w-auto w-screen  max-w-[950px]"
        >
          <div className="" id="bg-blue-ellipse">
            <Image
              className="blur-[120px]"
              src="/assets/bg-hero-blue.svg"
              alt="bg-hero-blue"
              width={1200}
              height={1199}
            />
          </div>
          <div className="absolute sm:top-[150px] top-0  lg:right-[-50px] sm:right-20 max-[500px]:left-[50%] max-[500px]:translate-x-[-50%] z-50">
            <div className="relative  md:w-[400px] md:h-[225px] max-w-[400px] w-[300px] h-[200px]">
              <Image
                src="/assets/alerts.svg"
                alt="alerts"
                fill
                priority
                objectFit={true}
              />
            </div>
          </div>
          <div className="absolute sm:top-[230px] top-[150px] sm:base:left-0 sm:left-[-50px] max-[500px]:left-[50%] max-[500px]:translate-x-[-50%] z-20 px-8">
            <div className="relative base:w-[672px] md:w-[500px] md:h-[448px] max-w-[672px] sm:w-[400px] sm:h-[400px] max-[500px]:w-[350px] max-[500px]:h-[350px]">
              <Image
                src="/assets/head-sqli.svg"
                alt="head-sqli"
                fill
                priority
                quality={75}
                objectFit={true}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute xl:top-[650px] bottom-[-200px] left-0 w-full overflow-hidden">
        <Image
          src="/assets/wavy-bg-form.svg"
          alt="wavy-form"
          width={1800}
          height={3450}
        ></Image>
      </div>
      <WhySekops></WhySekops>
      <Features></Features>
      <TechSupported></TechSupported>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  );
}
