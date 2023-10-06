import Image from "next/image";
import { WhySekops } from "./components/why-sekops";
import { Navbar } from "./shared/navbar";

export default function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen w-full relative">
        <div id="bg-hero-circles" className="flex items-center justify-center">
          <Image
            src="/assets/circles-1x.svg"
            alt="ciircles-bg"
            width={1500}
            height={1305}
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
          className="z-50 absolute translate-x-[-50%] top-[25%] left-[50%] translate-y-[-50%] flex flex-col items-center"
        >
          <h1 className="mb-8 text-black-primary text-[70px] capitalize leading-[90px] text-center font-semibold">
            Application security for everyone
          </h1>
          <p className="text-black-primary text-[18px] font-normal text-center max-w-[75%] flex justify-center">
            Empowering businesses of all sizes with affordable,
            easy-to-integrate, and high-impact Application Security solution
          </p>
        </div>
        <div id="languages-logos" className="z-50 top-0 absolute w-full h-full">
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
          <div id="angular" className="absolute top-[367px] right-[290px]">
            <Image
              src="/assets/angular.svg"
              alt="angular"
              width={191}
              height={191}
            />
          </div>
          <div id="spring" className="absolute top-[569px] right-[192px]">
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
          className="absolute bottom-0 translate-x-[-50%] left-[50%]"
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
          <div className="absolute top-[150px] right-0 z-50">
            <Image
              src="/assets/alerts.svg"
              alt="alerts"
              width={400}
              height={225}
            />
          </div>
          <div className="absolute top-[230px] left-0 z-20">
            <Image
              src="/assets/head-sqli.svg"
              alt="head-sqli"
              width={672}
              height={448}
            />
          </div>
        </div>
      </section>
      <WhySekops></WhySekops>
    </main>
  );
}
