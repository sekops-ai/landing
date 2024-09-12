import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[1100px] md:min-h-[1200px] xl:min-h-screen w-full relative "
    >
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

      <div
        id="hero-description"
        className="z-[100] absolute translate-x-[-50%] xl:top-[25%] base:top-[25%] sm:top-[20%] top-[30%] left-[50%] translate-y-[-20%] flex flex-col items-center xl:w-auto w-11/12"
      >
        <h1 className="font-manrope base:mb-8 mb-6 text-black-primary 2xl:text-[70px] xl:text-[70px] base:text-[55px] text-[40px] capitalize base:leading-[80px] leading-[60px] text-center font-semibold">
          Application security for everyone
        </h1>
        <p className="text-black-primary mb-20 text-[18px] font-normal text-center sm:max-w-[75%] max-w-full flex justify-center">
          Empowering businesses of all sizes with affordable, easy-to-integrate,
          and high-impact Application Security solution
        </p>
        <div className="mb-12  flex items-center lg:gap-20 gap-10  flex-wrap xl:w-[800px]">
          <div className="relative w-[120px] h-[40px] md:w-[193px] md:h-[42px]">
            <Image
              src="/assets/icons/secdojo.svg"
              alt="secdojo"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
            {/* width={193}
              height={42} */}
          </div>
          <div className="relative w-[100px] h-[40px] md:w-[149px] md:h-[42px]">
            <Image
              src="/assets/icons/sekera.svg"
              alt="sekera"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="relative w-[70px] h-[20px] md:w-[111px] md:h-[32px]">
            <Image
              src="/assets/icons/cdm.svg"
              alt="cdm"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="relative w-[93px] h-[30px] md:w-[93px] md:h-[40px]">
            <Image
              src="/assets/icons/afma.svg"
              alt="afma"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div
        id="languages-logos"
        className="xl:block hidden z-50 top-0 absolute w-full h-full"
      >
        <div id="k-8" className="absolute top-[112px] left-[100px]">
          <Image src="/assets/k8.svg" alt="k-8" width={191} height={191} />
        </div>
        <div id="php" className="absolute top-[112px] right-[100px]">
          <Image src="/assets/php.svg" alt="php" width={191} height={191} />
        </div>
        <div id="python" className="absolute top-[300px] left-[10px]">
          <Image src="/assets/python.svg" alt="php" width={191} height={191} />
        </div>
        <div id="react" className="absolute top-[410px] left-[100px]">
          <Image src="/assets/react.svg" alt="react" width={191} height={191} />
        </div>
        <div id="gitlab" className="absolute top-[300px] right-[10px]">
          <Image
            src="/assets/gitlab.svg"
            alt="gitlab"
            width={191}
            height={191}
          />
        </div>
        <div id="angular" className="absolute top-[310px] right-[160px]">
          <Image
            src="/assets/angular.svg"
            alt="angular"
            width={191}
            height={191}
          />
        </div>
        <div id="spring" className="absolute top-[490px] right-[20px]">
          <Image
            src="/assets/spring.svg"
            alt="spring"
            width={191}
            height={191}
          />
        </div>
        <div id="js" className="absolute top-[530px] left-[40px]">
          <Image src="/assets/js.svg" alt="js" width={191} height={191} />
        </div>
      </div>

      <div
        id="demo-screens"
        className="z-50 mt-[10rem] max-w-[800px] max-h-[800px] absolute bottom-0 base:top-[350px] sm:top-[300px] top-[430px]  left-10 base:translate-x-[-50%] base:left-[50%] xl:w-auto "
      >
        <div id="bg-blue-ellipse" className="relative top-0 left-[-200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="1199"
            viewBox="0 0 1200 1199"
            fill="none"
          >
            <g opacity="0.5" filter="url(#filter0_f_1_7246)">
              <path
                d="M200 599.254C200 378.752 379.498 200 600 200C820.502 200 1000 378.752 1000 599.254C1000 819.755 820.502 998.507 600 998.507C379.498 998.507 200 819.755 200 599.254Z"
                fill="#526ED3"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_7246"
                x="0"
                y="0"
                width="1200"
                height="1198.51"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_1_7246"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[150px] lg:right-[-50px] sm:left-0 left-[-20px]  z-50 alert-box">
          <div className="relative  md:w-[400px] md:h-[225px] max-w-[400px] sm:w-[300px] w-[250px] h-[200px] sm:h-[200px]">
            <Image
              src="/assets/alerts.svg"
              alt="alerts"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="absolute top-[230px]   sm:left-0 left-[-40px]  z-20 px-8 head-sqli-wrapper">
          <div className="relative base:w-[672px] md:w-[500px] md:h-[448px] max-w-[672px] sm:w-[400px] sm:h-[400px]  w-[300px] h-[300px] head-sqli-box">
            <Image
              src="/assets/head-sqli.svg"
              alt="head-sqli"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
